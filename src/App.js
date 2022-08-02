import React, { useState } from "react";

const Collapse = (props) => {
  const [state, setState] = useState({ cardState: false });

  const toggleCardState = () => {
    setState({ cardState: !state.cardState });
  };

  const { title, children } = props;
  const { cardState } = state;

  return (
    <div className="column is-6">
      <div className="card" aria-hidden={cardState ? "false" : "true"}>
        <header
          className="card-header"
          style={{ cursor: "pointer" }}
          onClick={toggleCardState}
        >
          <p className="card-header-title">{title}</p>
          <a className="card-header-icon">
            <span
              className="icon"
              style={{
                transform: cardState ? null : "rotate(180deg)",
                transition: "transform 250ms ease-out"
              }}
            >
              <i className="fa fa-angle-up"></i>
            </span>
          </a>
        </header>
        <div
          className="card-content"
          style={{
            maxHeight: cardState ? 1000 : 0,
            padding: cardState ? null : 0,
            overflow: "hidden",
            transition: "max-height 250ms ease",
            transition: "padding 250ms ease"
          }}
        >
          <div className="content">{children} </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          <Collapse title="Title 1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
          </Collapse>
          <Collapse title="Title 2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
          </Collapse>
          <Collapse title="Title 3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
          </Collapse>
          <Collapse title="Title 4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
          </Collapse>
          <Collapse title="Title 5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
          </Collapse>
          <Collapse title="Title 6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
          </Collapse>
          <Collapse title="Title 7">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
          </Collapse>
          <Collapse title="Title 8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
          </Collapse>
          <Collapse title="Title 9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse elementum mauris et porta mattis.
            </p>
          </Collapse>
        </div>
      </div>
    </section>
  );
}
export default App;
