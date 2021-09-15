import React, { useState, useEffect } from "react";
import VideoRecorder from "react-video-recorder";
import { Button } from "reactstrap";
import API from "../../config/config";
import { useParams } from "react-router-dom";
import { message, notification } from "antd";

function Main() {
  const [blobt, setBlobt] = useState({});
  const [uuid, setUuid] = useState("");
  const [displaybtn, setDisplaybtn] = useState(false);

  let downloadBlob = (blob, name = "file.mp4") => {
    // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
    const blobUrl = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement("a");

    // Set link's href to point to the Blob URL
    link.href = blobUrl;
    link.download = name;

    // Append link to the body
    document.body.appendChild(link);

    // Dispatch click event on the link
    // This is necessary as link.click() does not work on the latest firefox
    link.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      })
    );

    // Remove link from body
    document.body.removeChild(link);
  };

  let changeHTml = () => {
    document.getElementsByClassName("fFmUXH").innerHtml = "Retake?";
    setDisplaybtn(true);
  };

  let sendDate = (blob) => {
    if (blob !== undefined) {
      var data = new FormData();
      var file = new File([blob], `vid.mp4`);
      data.append("file", file);
      data.append("firmName", uuid);

      fetch(API.api_route + "/aws/sendResponseVid", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
        body: data,
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            alert("jjj");
            console.log("File Uploaded Successfully!!!");
            message.success("File Uploaded Successfully!!!");
          } else {
            console.log({ message: "Try Again " });
            notification.error({ message: "Try Again" });
          }
        })
        .catch((err) => {
          alert(`err${err}`);
          console.log(err);
        });
    }
  };

  const { id } = useParams();

  async function getMedia(constraints) {
    let stream = null;

    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      /* use the stream */
    } catch (err) {
      /* handle the error */
    }
  }

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  useEffect(() => {
    let nid = getParameterByName("id");
    setUuid(nid);
    console.log(nid);
    // getMedia({ audio: true, video: true });
  }, []);

  return (
    <div>
      <div style={{ paddingTop: "10px" }}>
        <h3>Delisted Video Confirmation</h3>
      </div>
      <div style={{ height: `${window.innerHeight - 150}px` }}>
        <VideoRecorder
          onRecordingComplete={(videoBlob) => {
            // Do something with the video...
            console.log("videoBlob", videoBlob);
            changeHTml();
            setBlobt(videoBlob);
          }}
        />
      </div>
      {displaybtn && (
        <Button
          onClick={() => {
            sendDate(blobt);
          }}
          style={{ marginTop: "30px" }}
          color="primary"
        >
          Submit
        </Button>
      )}
    </div>
  );
}

export default Main;
