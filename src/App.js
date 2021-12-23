import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Toast from "./modules/toast.js";

import {
  Nav,
  Header,
  Defining,
  Knowledge,
  Sourcing,
  Engaging,
  Boarding,
  Growing,
  Book,
  Diversity,
  Managers,
  Glossary,
  Jobs,
  Equal,
  Bias,
  Contact,
  Profile,
  Mathison,
} from "./modules/index.js";

const App = () => {
  const [data, setData] = useState([]);

  const [definingGetData, setDefiningGetData] = useState([]);

  const [sourcingGetData, setSourcingGetData] = useState([]);

  const [interviewingGetData, setInterviewingGetData] = useState([]);

  const [onBoardGetData, setOnBoardGetData] = useState([]);

  const [growingGetData, setGrowingGetData] = useState([]);

  const [bookGetData, setBookGetData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [yourList, setYourList] = useState([]);

  const [listArr] = useState([]);

  const [bookmark] = useState(true);

  const [toastActive, setToastActive] = useState(false);
  const [toastDuplicateActive, setToastDuplicateActive] = useState(false);

  // function addBookMark(event){
  //     let pill = event.target.previousSibling.previousSibling
  //     let time = event.target.previousSibling
  //     let title = event.target.parentNode.parentNode.nextSibling.firstChild
  //     let snippet = event.target.parentNode.parentNode.nextSibling.firstChild.nextSibling

  //     let tags = event.target.parentNode.parentNode.nextSibling.firstChild.nextSibling.nextSibling.childNodes

  //     let index = event.target.parentNode.parentNode.parentNode.firstChild.innerText

  //     let newIndex = parseInt(index)
  //     let newNumber = 1

  //     for(let i = 0; i < tags.length; i++){
  //         let allTags = tags[i]
  //     }

  //     let checkDuplicate = listArr.findIndex(function (item) {
  //       return item.newIndex === newIndex;
  //     });
  //     if (checkDuplicate === -1) {
  //         listArr.push(
  //              {pill, time, title, snippet, newIndex}

  //         )
  //   }
  //     console.log(checkDuplicate)
  //     setYourList([...listArr])
  //     setNumber(newNumber)

  // }

  function removeBookMark(event) {
    let index =
      event.target.parentNode.parentNode.parentNode.firstChild.textContent;
    let newIndex = parseInt(index, 10);

    let toRemoveIndex = listArr.findIndex(function (item) {
      return item.newIndex === newIndex;
    });

    if (toRemoveIndex !== -1) {
      listArr.splice(toRemoveIndex, 1);
    }
    setYourList([...listArr]);
  }

  //   Toast for adding bookmark to "your list"
  function bookmarkToast() {
    let toast = document.getElementById("bookmark-toast");
    setToastActive(true);

    toast.className = "t-active";

    !toastActive
      ? setTimeout(function () {
          toast.classList.remove("t-active");
          setToastActive(false);
        }, 2500)
      : toast.classList.remove("t-active");
    clearTimeout(bookmarkToast);
  }

  //   Toast for when the bookmark trying to be added already is in "your list"
  function bookmarkToastDuplicate() {
    let toast = document.getElementById("bookmark-toast-duplicate");
    setToastDuplicateActive(true);

    toast.className = "duplicate-t-active";

    !toastDuplicateActive
      ? setTimeout(function () {
          toast.classList.remove("duplicate-t-active");
          setToastDuplicateActive(false);
        }, 2500)
      : toast.classList.remove("duplicate-t-active");
  }

  function addBookMark(event) {
    let pill = event.target.previousSibling.firstChild;
    let time = event.target.previousSibling.firstChild.nextSibling;
    let title =
      event.target.parentNode.parentNode.firstChild.nextSibling.nextSibling
        .firstChild.firstChild;
    let snippet =
      event.target.parentNode.parentNode.firstChild.nextSibling.nextSibling
        .firstChild.firstChild.nextSibling;
    let index =
      event.target.parentNode.parentNode.parentNode.firstChild.firstChild
        .innerText;
    let tags =
      event.target.parentNode.nextSibling.firstChild.nextSibling.childNodes;

    let allTags = [];

    for (let i = 0; i < tags.length; i++) {
      allTags.push(tags[i]);
    }

    let newIndex = parseInt(index, 10);

    let checkDuplicate = listArr.findIndex(function (item) {
      return item.newIndex === newIndex;
    });

    if (checkDuplicate === -1) {
      listArr.push({ pill, time, title, snippet, newIndex, allTags });
      bookmarkToast();
    } else {
      bookmarkToastDuplicate();
    }

    setYourList([...listArr]);
  }

  //   add featured content bookmark
  function addFeaturedBookMark(event) {
    let pill = event.target.previousSibling.firstChild;
    let time = event.target.previousSibling.firstChild.nextSibling;
    let title =
      event.target.parentNode.parentNode.firstChild.nextSibling.nextSibling
        .firstChild.firstChild;
    let snippet =
      event.target.parentNode.parentNode.firstChild.nextSibling.nextSibling
        .firstChild.firstChild.nextSibling;
    let index =
      event.target.parentNode.parentNode.parentNode.firstChild.nextSibling
        .firstChild.innerText;
    let tags = event.target.parentNode;

    let allTags = [];

    for (let i = 0; i < tags.length; i++) {
      allTags.push(tags[i]);
    }
    let newIndex = parseInt(index, 10);

    let checkDuplicate = listArr.findIndex(function (item) {
      return item.newIndex === newIndex;
    });

    if (checkDuplicate === -1) {
      listArr.push({ pill, time, title, snippet, newIndex, allTags });
      bookmarkToast();
    } else {
      bookmarkToastDuplicate();
    }

    setYourList([...listArr]);
  }

  const categoryData = axios.get(
    "https://interview-assignment-backend.herokuapp.com/pages/categories",
    {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
        "x-client-id": process.env.REACT_APP_CLIENT_ID,
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "x-client-request-scope": process.env.REACT_APP_SCOPE,
      },
    }
  );

  const definingData = axios.get(
    "https://interview-assignment-backend.herokuapp.com/pages/defining_and_tracking_dei",
    {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
        "x-client-id": process.env.REACT_APP_CLIENT_ID,
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "x-client-request-scope": process.env.REACT_APP_SCOPE,
      },
    }
  );

  const sourcingData = axios.get(
    "https://interview-assignment-backend.herokuapp.com/pages/sourcing_and_attracting",
    {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
        "x-client-id": process.env.REACT_APP_CLIENT_ID,
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "x-client-request-scope": process.env.REACT_APP_SCOPE,
      },
    }
  );

  const interviewData = axios.get(
    "https://interview-assignment-backend.herokuapp.com/pages/interviewing_and_engaging",
    {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
        "x-client-id": process.env.REACT_APP_CLIENT_ID,
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "x-client-request-scope": process.env.REACT_APP_SCOPE,
      },
    }
  );

  const onBoardData = axios.get(
    "https://interview-assignment-backend.herokuapp.com/pages/onboarding_and_advancing",
    {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
        "x-client-id": process.env.REACT_APP_CLIENT_ID,
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "x-client-request-scope": process.env.REACT_APP_SCOPE,
      },
    }
  );

  const growingData = axios.get(
    "https://interview-assignment-backend.herokuapp.com/pages/growing_dei_leaders",
    {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
        "x-client-id": process.env.REACT_APP_CLIENT_ID,
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "x-client-request-scope": process.env.REACT_APP_SCOPE,
      },
    }
  );

  const hiringData = axios.get(
    "https://interview-assignment-backend.herokuapp.com/pages/hiring_for_diversity",
    {
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
        "x-client-id": process.env.REACT_APP_CLIENT_ID,
        Authorization: process.env.REACT_APP_AUTHORIZATION,
        "x-client-request-scope": process.env.REACT_APP_SCOPE,
      },
    }
  );

  const getAllData = () => {
    axios
      .all([
        categoryData,
        definingData,
        sourcingData,
        interviewData,
        onBoardData,
        growingData,
        hiringData,
      ])
      .then(
        axios.spread((...responses) => {
          const knowledge = responses[0].data;
          const definingData = responses[1].data;
          const sourcingData = responses[2].data;
          const interviewData = responses[3].data;
          const onBoardData = responses[4].data;
          const growingData = responses[5].data;
          const hiringData = responses[6].data;
          setData(knowledge);
          setDefiningGetData(definingData);
          setSourcingGetData(sourcingData);
          setInterviewingGetData(interviewData);
          setOnBoardGetData(onBoardData);
          setGrowingGetData(growingData);
          setBookGetData(hiringData);
          setLoading(false);
        })
      )
      .catch(() => {
        console.log("catch error");
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <Header></Header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Nav></Nav>
        <Routes>
          <Route exact path="/" element={<Mathison />}></Route>

          <Route
            exact
            path="/knowledgecenter"
            element={
              <Knowledge
                data={data}
                loading={loading}
                addBookMark={addBookMark}
                addFeaturedBookMark={addFeaturedBookMark}
                bookmark={bookmark}
                yourList={yourList}
                removeBookMark={removeBookMark}
              />
            }
          />

          <Route
            exact
            path="/defining_and_tracking_dei"
            element={
              <Defining
                definingGetData={definingGetData}
                loading={loading}
                addBookMark={addBookMark}
                bookmark={bookmark}
                yourList={yourList}
                removeBookMark={removeBookMark}
              />
            }
          />

          <Route
            exact
            path="/sourcing_and_attracting"
            element={
              <Sourcing
                sourcingGetData={sourcingGetData}
                loading={loading}
                addBookMark={addBookMark}
                bookmark={bookmark}
                yourList={yourList}
                removeBookMark={removeBookMark}
              />
            }
          />

          <Route
            exact
            path="/interviewing_and_engaging"
            element={
              <Engaging
                interviewingGetData={interviewingGetData}
                loading={loading}
                addBookMark={addBookMark}
                bookmark={bookmark}
                yourList={yourList}
                removeBookMark={removeBookMark}
              />
            }
          />

          <Route
            exact
            path="/onboarding_and_advancing"
            element={
              <Boarding
                onBoardGetData={onBoardGetData}
                loading={loading}
                addBookMark={addBookMark}
                bookmark={bookmark}
                yourList={yourList}
                removeBookMark={removeBookMark}
              />
            }
          />

          <Route
            exact
            path="/growing_dei_leaders"
            element={
              <Growing
                growingGetData={growingGetData}
                loading={loading}
                addBookMark={addBookMark}
                bookmark={bookmark}
                yourList={yourList}
                removeBookMark={removeBookMark}
              />
            }
          />

          <Route
            exact
            path="/hiring_for_diversity"
            element={
              <Book
                bookGetData={bookGetData}
                loading={loading}
                addBookMark={addBookMark}
                bookmark={bookmark}
                yourList={yourList}
                removeBookMark={removeBookMark}
              />
            }
          />

          <Route
            exact
            path="/diverse_communities"
            element={<Diversity />}
          ></Route>

          <Route exact path="/hiring_managers" element={<Managers />}></Route>

          <Route exact path="/glossary_terms" element={<Glossary />}></Route>

          <Route exact path="/jobs" element={<Jobs />}></Route>

          <Route exact path="/equal" element={<Equal />}></Route>

          <Route exact path="/bias" element={<Bias />}></Route>

          <Route exact path="/contact" element={<Contact />}></Route>

          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
      <Toast />
    </div>
  );
};
export default App;
