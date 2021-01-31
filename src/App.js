import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    user: {},
    userId: 1,
  });

  const handlePageChange = (event) => {
    setState({
      ...state,
      userId: event.selected,
    });
  };

  const getUserDetail = async () => {
    const userDetail = await axios.get(`https://randomuser.me/api/`);
    console.log(userDetail.data.results[0]);
    setState({
      ...state,
      user: userDetail?.data?.results[0],
    });
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  useEffect(() => {
    getUserDetail();
  }, [state.userId]);

  return (
    <div className="App" id="react-paginate">
      <figure className="snip1336">
        <img src="https://source.unsplash.com/random" alt="sample87" />
        <figcaption>
          <img
            src={`${state?.user?.picture?.large}`}
            alt="profile-sample4"
            className="profile"
          />
          <h2>
            {state?.user?.name?.title} {state?.user?.name?.first}{" "}
            {state?.user?.name?.last}
            <span>{state?.user?.gender}</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </figcaption>
      </figure>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={10}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default App;
