import React from "react";
import FeaturedSection from "../featuredsection/featuredsection.js";
import NewlyAdded from "../newlyadded/newlyadded.js";
import Recommended from "../recommended/recommended.js";
import YourList from "../yourlist/yourlist.js";
import Loading from "../loading.js";

const Knowledge = (props) => {
  return (
    <div
      id="knowledgecenter"
      className="middle-body"
      style={{ display: "flex", width: "83vw", flexDirection: "column" }}
    >
      {!props.loading ? (
        <div>
          <FeaturedSection
            addBookMark={props.addBookMark}
            addFeaturedBookMark={props.addFeaturedBookMark}
            data={props.data}
          ></FeaturedSection>
          <NewlyAdded
            bookmark={props.bookmark}
            addBookMark={props.addBookMark}
            data={props.data}
          ></NewlyAdded>
          <Recommended
            addBookMark={props.addBookMark}
            data={props.data}
          ></Recommended>
          {props.yourList.length > 0 ? (
            <YourList
              removeBookMark={props.removeBookMark}
              yourList={props.yourList}
              data={props.data}
            ></YourList>
          ) : (
            <div style={{ marginTop: "7px" }}>
              <h2 className="your-list-title">Your List</h2>

              <div className="your-list-empty">
                <p>
                  Your list is <strong>empty</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};
export default Knowledge;
