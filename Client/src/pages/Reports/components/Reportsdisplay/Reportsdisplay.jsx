import styles from "./Reportsdisplay.module.css";
import { GoMention } from "react-icons/go";
import { BsCalendar2Check } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";

const Reportsdisplay = () => {
  const [reportPdf, setReportPdf] = useState("");
  const [activeProject, setActiveProject] = useState(undefined);
  const [currentReport, setCurrentReport] = useState(undefined);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/user/projects`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwtToken"),
            },
          }
        );
        if (response.data.status === "success") {
          await fetchCurrentProject(response.data.projects[0]._id);
        }
      } catch (e) {
        console.log(e);
      }
    };

    const fetchCurrentProject = async (id) => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/v1/project/${id}`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwtToken"),
            },
          }
        );
        if (response.data.status === "success") {
          setActiveProject(response.data.data.project);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, []);

  // if (activeProject) {
  //   const fetchCurrentReport = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://127.0.0.1:8000/api/v1/project/${activeProject._id}/report`,
  //         {
  //           headers: {
  //             Authorization: "Bearer " + localStorage.getItem("jwtToken"),
  //           },
  //         }
  //       );
  //       console.log(response.data);
  //       if (response.data.status === "success") {
  //         setCurrentReport(response.data.data.report);
  //       }
  //       setCurrentReport(undefined);
  //     } catch (e) {
  //       setCurrentReport(undefined);
  //       console.log(e);
  //     }
  //   };
  //   fetchCurrentReport();
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("report", reportPdf);
    // formData["report"] = reportPdf;
    console.log(reportPdf, formData);
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/v1/project/${activeProject._id}/report`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("jwtToken"),
          },
        }
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    console.log(reportPdf);
    setReportPdf(e.target.value);
  };
  return (
    <div className={styles.reportsdisplay}>
      {currentReport ? currentReport : "no report"}
      {activeProject ? (
        <div className="gantttxt">
          <form className={styles.reportscontainer} onSubmit={handleSubmit}>
            <h2 className={styles.reportheader}>Upload Your Report Here</h2>
            <input type="file" onChange={handleChange}></input>
            <button type="submit">Submit Now</button>
          </form>
        </div>
      ) : (
        "loading.."
      )}
    </div>
  );
};

export default Reportsdisplay;
