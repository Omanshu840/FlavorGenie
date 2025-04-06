import React, { useState } from "react";
import { Container, Card, Modal, Image} from "react-bootstrap";
import * as Colors from "../css/colors";
import { Shadows } from "../css/shadows";
import YouTubeEmbed from "./YoutubeEmbed";


const VideoListContainer = ({showPanel, setShowPanel, videos}) => {
  return (
    <>
      {/* Sliding panel */}
      <div
        style={{
          position: 'fixed',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          transition: 'width 0.3s ease, height 0.3s ease',
          zIndex: 999,
          width: showPanel ? 'calc(100vw - 20px)' : '170px',
          height: showPanel ? 'calc(100vh - 120px)' : '40px',
          maxWidth: '400px',
          border: 'none',
          backgroundColor: Colors.PR2,
          boxShadow: Shadows.Box_Shadow4,
          borderRadius: '20px'
        }}
      >
        {showPanel && (
          <Card style={{backgroundColor: Colors.PR2, border: 'none', boxShadow: Shadows.Box_Shadow4, borderRadius: '20px'}}>
            <Card.Body>
              <Card.Text style={{maxHeight: 'calc(100vh - 150px)', overflow: 'scroll'}}><VideoList videos={videos}/></Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
};



const VideoList = ({videos}) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <Container className="d-flex flex-column align-items-center p-3" style={{ maxWidth: "600px", backgroundColor: Colors.PR2}}>
      {videos?.map((video) => (
        <Card key={video.id} className="mb-3" style={{ width: "100%", border: 'none' }}>
          <Image src={video.thumbnail} alt={video.title} fluid style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} />
          <Card.Body>
            <YouTubeEmbed videoUrl={video}/>
          </Card.Body>
        </Card>
      ))}

      {/* Video Modal */}
      <Modal show={!!selectedVideo} onHide={() => setSelectedVideo(null)} centered>
        <Modal.Body className="p-0">
          {selectedVideo && (
            <YouTubeEmbed videoUrl={selectedVideo.url}/>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default VideoListContainer;
