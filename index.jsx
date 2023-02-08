
const Link = ReactRouterDOM.Link;
const NavLink = ReactRouterDOM.NavLink;
const Route = ReactRouterDOM.Route;
const matchPath = ReactRouterDOM.matchPath;
// const useParams = ReactRouterDOM.Params;
const { Card, Button, Container, Form, Nav, Navbar, Row, Col } = ReactBootstrap;
const { useState, useEffect } = React;

var GetData = [
  {
    departmentT: "Project Management Office",
    id: "1",
    remote: true,
    worktypeV: "1",
    locationText: "",
    reults: {
      id: "1",
      title: "ERP Project Manager",
      descriptionT:
        "Azdan ERP Project manager develops, plans, and implements successful planning and execution of Oracle NetSuite project, he/she makes decisions that directly benefit the project, control the risk and minimize uncertainty.\r\n\r\nAssumes an experienced level of project management, especially for complex nature, high values, and strategic projects",
      locationText: "remote",
      locationValue: "",
      remote: true,
      worktypeT: "Full-Time",
      worktypeV: "1",
      departmentT: "Project Management Office",
      responsibilities:
        "<ul><li>Understanding the project scope, schedule, and deliverables from the project manager</li><li>Working closely with Azdan consultants to recognize project needs and requirements.</li><li>Gather Project Requirements through meetings with the client and the internal function team.</li><li>Document all client meetings by the Minutes of the meeting document to be shared with the direct manager and the internal team.</li><li>Driving periodic project reviews and mitigating risks with due diligence and a data-driven approach</li><li>Contributing to the delivery of all aspects of the project and services: controlling and reporting on project activities and information security.</li><li>End-to-end program management – project initiation, planning, execution, control, and closure.</li><li>Applies a comprehensive understanding of NetSuite ERP foundational concepts and customer solutions</li><li>Cultivate relationships with team members, customer stakeholders and 3rd parties</li><li>Assign, disseminate, track, control and accept work to assigned parties within the Project scope.</li><li>Handling conflicts and ensuring project safe integration and delivery among various parties and stakeholders.</li><li>Conduct Project progress meetings, steering meetings and correspondences.</li><li>Influence project changes and enforces project change management procedures.</li><li>Maintain and professionally keep project documentation according to the Azdan PM policy and be prepared for projects audit.</li><li>Prepare all project-related reports such as project status, variance report, resources utilization, risk reports.</li><li>Reporting, analyzing, and resolving issues related to the implementation, stakeholders, and project operations that may impact service quality; ensuring that stakeholders’ questions and problems are resolved properly.</li><li>Improving support experience for quality results by studying, evaluating, and redesigning processes, establishing and communicating service metrics, monitoring and analyzing results, and implementing changes</li></ul>",
      requirements:
        '<ul><li style="text-align: justify;">Proven track record for planning, executing, controlling, and closing projects and the ability to manage NetSuite projects and their components simultaneously with minimal supervision.</li><li style="text-align: justify;">Experience in project management using waterfall methodology for medium to large-sized projects.</li><li style="text-align: justify;">Strong skills in creating and maintaining project and program plans, including risks, actions, and issues.</li><li style="text-align: justify;">Highly efficient in resource planning and tasks assigned.</li><li style="text-align: justify;">Knowledge of benefits and dependency mapping, risk management, and resource planning.</li><li style="text-align: justify;">Highly proficient IT skills in Word, Excel, PowerPoint, and MS projects.</li><li style="text-align: justify;">Line management or team leader experience.</li><li style="text-align: justify;">Excellent written/oral communication skills for reports and presentations.</li><li style="text-align: justify;">Diplomatic ability to influence others at all levels of the business.</li><li style="text-align: justify;">Strong and demonstrated ability to build lasting relationships with key stakeholders.</li><li style="text-align: justify;">Ability to competently mediate disagreements and negotiate agreeable resolutions</li></ul><div style="text-align: justify;">&nbsp;</div>',
    },
  },
  {
    departmentT: "NetSuite Department",
    id: "2",
    remote: true,
    worktypeV: "1",
    locationText: "",
    reults: {
      id: "2",
      title: "NetSuite Principle Consultant (Remote)",
      descriptionT:
        "The role of the NetSuite Principle Consultant understands solutions, industry best practices, multiple business processes, or technology designs within a product/technology family. Operates independently to provide quality work products to an engagement. Performs varied and complex duties and tasks that need independent judgment, in order to implement NetSuite and technology to meet Client needs. Applies Oracle methodology, company procedures, and leading practices.",
      locationText: "remote",
      locationValue: "",
      remote: true,
      worktypeT: "Full-Time",
      worktypeV: "1",
      departmentT: "NetSuite Department",
      responsibilities:
        '<ul type="disc"><li style="text-align: justify;">Lead the NetSuite team</li><li style="text-align: justify;">&nbsp;Demonstrate an exceptional understanding of NetSuite ERP and finance systems</li><li style="text-align: justify;">Examine and extract customer data to formulate solutions</li><li style="text-align: justify;">&nbsp;Develop and execute efficient solutions that meet customer requirements</li><li style="text-align: justify;">&nbsp;Coordinate with the consulting team and 3rd party resources as required for project delivery</li><li style="text-align: justify;">Maintain relationships with internal and external stakeholders to best design immediate and future business goals</li><li style="text-align: justify;">Establish KPIs and metrics across the team to measure product performance.</li><li style="text-align: justify;">Own relationships with key business partners in Sales, Finance, and Operations and ensure that critical business requirements are being captured. Build and maintain the systems roadmap for your functional areas.</li><li style="text-align: justify;">Collaborate with other teams under Business Technology such as Integrations and Technical Team to develop comprehensive solutions.</li><li style="text-align: justify;">Perform all NetSuite management functions: performance reviews, staff calls, 1x1s, onboarding, career development, talent retention, motivation, etc.</li><li style="text-align: justify;">Communicate effectively with technical and non-technical audiences and develop and deliver engaging presentations that influence and persuade leadership on recommendations.</li><li style="text-align: justify;">&nbsp;Review program requirements and deployment plans/launch orchestration plans and provide appropriate recommendations to improve quality, de-risk, or preempt issues.</li><li style="text-align: justify;">Continually challenge the current model and methods: track productivity and quality metrics, and come up with creative ideas to improve the efficiency and effectiveness of the team for continuous improvement.</li><li style="text-align: justify;">Focus on Customer Success, Build for the Long Term, Adopt a Growth Mindset, Be Inclusive, and Win as a Team as we scale globally and across new offices.</li></ul><div style="text-align: justify;">&nbsp;</div>',
      requirements:
        '<div style="text-align: justify;"><ul type="disc"><li>Experience in managing the complete lifecycle of NetSuite projects with project teams of not less than 5 years.</li><li>Experience in project management using waterfall methodology for medium to large-sized projects.</li><li>Strong skills in creating and maintaining project and program plans, including risks, actions, and issues.</li><li>Highly efficient in resource planning and tasks assigned.</li><li>Knowledge of benefits and dependency mapping, risk management, and resource planning.</li><li>Highly proficient IT skills in Word, Excel, PowerPoint, and MS projects.</li><li>Line management or team leader experience.</li><li>Excellent written/oral communication skills for reports and presentations.</li><li>Diplomatic ability to influence others at all levels of the business.</li><li>Strong and demonstrated ability to build lasting relationships with key stakeholders.</li></ul><ul><li>Ability to competently mediate disagreements and negotiate agreeable resolutions.</li></ul></div>',
    },
  },
  {
    departmentT: "Engineering",
    id: "3",
    remote: true,
    worktypeV: "1",
    locationText: "",
    reults: {
      id: "3",
      title: "Frontend Engineer",
      descriptionT:
        "Your primary focus will be on developing, testing, releasing, and maintaining our cross-functional platform’s frontend",
      locationText: "remote",
      locationValue: "",
      remote: true,
      worktypeT: "Full-Time",
      worktypeV: "1",
      departmentT: "Engineering",
      responsibilities:
        '<div block="" style="\\&quot;display:">&nbsp;</div><ul><li>Optimize applications for maximum speed</li><li>Design mobile-based features</li><li>Collaborate with back-end developers and web designers to improve the usability</li><li>Recommend appropriate technologies to implement new features.</li><li>Review code, layout, and design for projects before client meetings.</li><li>Build, deliver, and iterate to help scale projects.</li><li>Create new methods for improving efficiency.</li></ul><br><div block="" style="\\&quot;display:">&nbsp;</div>',
      requirements:
        '<div style="display: block; width: 0px; height: 0px; padding: 0px; border: 0px; margin: 0px; position: absolute; top: 0px; left: -9999px; opacity: 0; overflow: hidden;">&nbsp;</div><ul><li><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Strong experience with reactjs and nodejs React-native is a plus.</span></span></li><li><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Familiarity with bundling tools like Webpack.</span></span></li><li><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Familiarity with Task Runners like Gulp or Grunt.</span></span></li><li><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Knowledge in unit testing using Jest or Mocha.</span></span></li><li><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Ability to translate mockups into seamless web pages with perfect visual and functional elements.</span></span></li><li><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Experience in building large and modular codebases.</span></span></li><li><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Strong understanding of REST APIs and knowledge of how to interface with them.</span></span></li><li><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">Bachelor\'s Degree in Computer Science, Engineering or equivalent field.</span></span></li><li><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">3+ years of experience working in Front-End Development.</span></span></li></ul><ul><li><span style="font-size:11pt"><span style="font-family:Calibri,sans-serif">1+ years of experience in React.js.</span></span></li></ul><br><br>&nbsp;<div style="display: block; width: 0px; height: 0px; padding: 0px; border: 0px; margin: 0px; position: absolute; top: 0px; left: -9999px; opacity: 0; overflow: hidden;">&nbsp;</div>',
    },
  },
  {
    departmentT: "Finance",
    id: "4",
    remote: false,
    worktypeV: "2",
    locationText: "Abu Dhabi, UAE",
    reults: {
      id: "4",
      title: "NetSuite Principle Consultant",
      descriptionT:
        "The role of the NetSuite Principle Consultant understands solutions, industry best practices, multiple business processes, or technology designs within a product/technology family. Operates independently to provide quality work products to an engagement. Performs varied and complex duties and tasks that need independent judgment, in order to implement NetSuite and technology to meet Client needs. Applies Oracle methodology, company procedures, and leading practices.",
      locationText: "Abu Dhabi, UAE",
      locationValue: "4",
      remote: false,
      worktypeT: "Part-Time",
      worktypeV: "2",
      departmentT: "Finance",
      responsibilities: "",
      requirements:
        "<ul><li>Experience in managing the complete lifecycle of NetSuite projects with project teams of not less than 5 years.</li><li>Experience in project management using waterfall methodology for medium to large-sized projects.</li><li>Strong skills in creating and maintaining project and program plans, including risks, actions, and issues.</li><li>Highly efficient in resource planning and tasks assigned.</li><li>Knowledge of benefits and dependency mapping, risk management, and resource planning.</li><li>Highly proficient IT skills in Word, Excel, PowerPoint, and MS projects.</li><li>Line management or team leader experience.</li><li>Excellent written/oral communication skills for reports and presentations.</li><li>Diplomatic ability to influence others at all levels of the business.</li><li>Strong and demonstrated ability to build lasting relationships with key stakeholders.</li><li>Ability to competently mediate disagreements and negotiate agreeable resolutions.</li></ul>",
    },
  },
  {
    departmentT: "Engineering",
    id: "5",
    remote: false,
    worktypeV: "2",
    locationText: "Alex, Egypt",
    reults: {
      id: "5",
      title: "Senior Back End Developer",
      descriptionT:
        "We are looking for a highly skilled #Senior_Backend_Developer to join our company. In this role, you will use coding to operate back-end systems, write code optimized for mobile and develop databases and services for functionality.",
      locationText: "Alex, Egypt",
      locationValue: "2",
      remote: false,
      worktypeT: "Part-Time",
      worktypeV: "2",
      departmentT: "Engineering",
      responsibilities: "",
      requirements:
        '<ul><li style="text-align: justify;">&nbsp;You have 3 years’ experience.</li><li style="text-align: justify;">&nbsp;S/MS degree in computer science, engineering or a related subject.</li><li style="text-align: justify;">&nbsp;Knowledge of non-relational database.</li><li style="text-align: justify;">&nbsp;Knowledge and experience in PHP/MYSQL.</li><li style="text-align: justify;">&nbsp;Proficient Understanding of MVC design patterns.</li><li style="text-align: justify;">- Knowledge of PHP web frameworks "Laravel".</li><li style="text-align: justify;">- Proficient understanding of front-end technologies, such as JavaScript, HTML5, and CSS3.</li><li style="text-align: justify;">&nbsp;Knowledge of Socket.io, Firebase.</li><li style="text-align: justify;">&nbsp;Database design.</li><li style="text-align: justify;">TechnoCloud is a holding company for (Tech Startups) that aims to get the maximum of tech solutions for a better world and easier life in different fields.</li><li style="text-align: justify;">Our Mission: to change the world\'s time-consuming processes through easy, smart and reliable tech apps.</li><li style="text-align: justify;">Our Vision: to become the house of world changers tech apps.</li><li style="text-align: justify;">Our Team &amp; Culture</li><li style="text-align: justify;">We are one family of passionate young professionals with a flat hierarchy and inclusive management approach.</li><li style="text-align: justify;">TechnoCloud is where each member\'s voice is valued &amp; respected and even fun is considered in our agenda!</li><li style="text-align: justify;">Energetic workspace: fun enabled, focus oriented, energetic workspace and eye relieving decoration is a plus benefit for every member at our premises.</li><li style="text-align: justify;">Opportunity: Our employees are our most valuable assets, What\'s in it for you?</li><li style="text-align: justify;">Good work-life balance &amp; friendly working hours</li><li style="text-align: justify;">Inspiring mobile apps we\'re proud of and definitely you will be!</li><li style="text-align: justify;">Promising career progression</li><li style="text-align: justify;">Challenging work where you will be always hungry to learn</li><li style="text-align: justify;">The ability to make a difference &amp; to add value to the society</li><li style="text-align: justify;">Competitive packages</li><li style="text-align: justify;">Social &amp; Medical insurance</li></ul>',
    },
  },
];


/**
 *Component Page New Job
 * @param {*} param0 
 * @returns 
 */
const PageJob = ({ match }) => {
  let [Applly, setApply] = useState(1);
  let [load, setLoad] = useState(false);
  const [data, setData] = useState([]);

  // let { slug } = useParams();

  // console.log(match.params.id)

  useEffect(() => {
    const timer = setTimeout(() => {
      let newData = GetData.find((e) => e.id == match.params.id);

      setData(newData);
      setLoad(true);
      requi(newData);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // console.log(data.length)
  // console.log(data)

  let ref = React.createRef();

  const hendlerApplyForm = () => {
    let elemForm = (document.querySelector(".application-form").style.display =
      "block");
    document.querySelector(".btn-custom").style.opacity = "0.3";

    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const requi = (data) => {
    // let element =document.createElement(' div');
    if (data) {
      let texte = data.reults.responsibilities;
      //    return element.innerHTML= data.reults.requirements
      // console.log(data.reults.requirements)
      texte = texte; // 34 22
      // alert(texte)

      //    return ul.html(  JSON.stringify(data.reults.requirements,undefined,2 ))

      // alert(data.reults.requirements)
    }

    // data.map( e =>
    // //     `
    // // ${e.reults.eresponsibilities}
    // // `
    // )
  };

  const addHyperlink = (elem) => {
    if (
      elem.nativeEvent.composedPath()[1].querySelector(".form-control").value.trim() ===
      ""
    ) {
      return false;
    } else {
      setApply(Applly + 1);
      // console.log(setApply)
      const newDiv = document.createElement("div");
      // let fun =`onClick=${()=>removeHyperlink()}`
      newDiv.innerHTML = `
            <div id=${String(
              Applly
            )} class="form-group d-flex justify-content-between align-content-center col-12 p-0">
                    <input class="form-control col-10  mr-auto" type="text" placeholder="Hyperlink"/>
                    
                    <button id=${String(
                      Applly
                    )} onclick="removeHyperlink(this)" type="button" class="btn btn-add btn-remove add col-1 ml-auto" > - </button>
           </div>
            
            `;
      let element = document.querySelector(".link-group ");
      element.insertBefore(newDiv, element.firstChild);
    }
  };

  // load == true ?  console.log("responsibilities", data.reults.requirements) : null ;

  return (
    <div className="pageJob">
      {load == true ? (
        <div>
          <Header />

          <div className="colorBac container-fluid">
            <div className="container NavpageJob flex-column py-4">
              <div className="infoTitle col-12 py-3">
                <Link to="/" className="link-back">
                  <i className="fas fa-arrow-left"></i> {data.departmentT}
                </Link>
              </div>

              <div className="btnFrom col-12 ">
                <div className="row p-0 col-12 d-flex justify-content-between align-content-center">
                  <div className="col-8">
                    <h1 className="brand-color">{data.reults.title}</h1>
                    <div className="stick-hide-in-mobile text-color">
                      {" "}
                      {data.remote === true ? "Remote" : data.locationText}
                      <div>Work Type : {data.reults.worktypeT}</div>
                    </div>
                  </div>

                  <div className="col-4 pull-xs-right text-right">
                    <a
                      className="btn btn-custom"
                      onClick={() => hendlerApplyForm()}
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container   py-5">
            <div className="summary py-3">
              <h6 className="text-center my-4">Job Summary</h6>
              <span dangerouslySetInnerHTML={{__html: data.reults.descriptionT}} />
            </div>

            <div className="Responsibilities py-5">
              <h6 className="text-center my-4">Responsibilities</h6>
              <span dangerouslySetInnerHTML={{__html: data.reults.responsibilities}} />

              <h6 className="text-center my-4">Requirements </h6>
              <span dangerouslySetInnerHTML={{__html: data.reults.requirements}} />
            </div>
          </div>

          <div
            id="application-form"
            ref={ref}
            className="application-form container pl-5"
          >
            <h4 className="pl-3">Submit Your Application</h4>

            <form className="application-btn col-12 pl-3">
              <div className="resume-upload row col-2 p-0 ml-0">
                <input
                  value="resume"
                  type="hidden"
                  name="applicant[lead_attributes[[resumes_attributes][][description]]]"
                  id="applicant_lead_attributes[[resumes_attributes][][description]]"
                />
                <input
                  id="resume_id"
                  type="hidden"
                  name="applicant[lead_attributes[[resumes_attributes][][id]]]"
                />
                <input
                  id="skip_parsing"
                  type="hidden"
                  name="applicant[lead_attributes[[resumes_attributes][][skip_parsing]]]"
                />
                <label className="btn btn-primary" id="uploadValue">
                  Apply With Resume
                  <span className="required">*</span>
                </label>
                <input
                  type="file"
                  className="upload-file"
                  id="uploadFile"
                  accept="application/msword,application/x-ole-storage,application/octet-stream,
                                        application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf,text/plain,text/html,text/rtf,application/rtf,
                                        application/vnd.oasis.opendocument.text,application/vnd.ms-works,application/wpsoffice,.wps"
                  name="applicant[lead_attributes[resumes_attributes][][content]]"
                  data-label="Apply With Resume"
                  data-url="/jobs/leads/parse_resume"
                  title="Apply With Resume"
                />
              </div>

              <div className="infoFrom d-flex flex-wrap mt-4 p-0 col-6">
                <div className="form-group first_name col-4">
                  <label className="">
                    First Name
                    <span className="required">
                      *<span></span>
                    </span>
                  </label>
                  <input size="25" className="form-control" type="text" />
                </div>

                <div className="form-group middle_name col-4">
                  <label className="">Middle Name</label>
                  <input size="25" className="form-control" type="text" />
                </div>

                <div className="form-group last_name col-4">
                  <label className="">
                    Last Name
                    <span className="required">
                      *<span></span>
                    </span>
                  </label>
                  <input size="25" className="form-control" type="text" />
                </div>

                <div className=" form-group col-12">
                  <label className="">
                    Email
                    <span className="required">
                      *<span></span>
                    </span>
                  </label>
                  <input size="25" className="form-control" type="text" />
                </div>

                <div className="form-group col-12">
                  <label className="">Mobile</label>
                  <input size="25" className="form-control" type="text" />
                </div>

                <div className="form-group col-12">
                  <label className="">Phone</label>
                  <input size="25" className="form-control" type="text" />
                </div>

                <div className="form-group section-group my-5 col-12">
                  <div className="link-label p-0 col-12">
                    <div className="link-label-title p-0 col-12">
                      Social Network and Web Links
                    </div>
                    Provide us with links to see some of your work (Git/
                    Dribble/ Behance/ Pinterest/ Blog/ Medium)
                  </div>

                  <div className="flex-column d-flex justify-content-around link-group col-12 p-0">
                    <div
                      id={Applly}
                      className="form-group add-group d-flex justify-content-between align-content-center col-12 p-0"
                    >
                      <input
                        className="form-control col-10  mr-auto"
                        type="text"
                        placeholder="Hyperlink"
                      />

                      <button
                        id={String(Applly)}
                        onClick={(e) => addHyperlink(e)}
                        type="button"
                        className="btn btn-add add col-1 ml-auto"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="btnSubm col-12">
                <input
                  type="submit"
                  name="commit"
                  value="Submit Application"
                  className="col-2 btn btn-primary btn-lg"
                  id="submit-button"
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="ring">
          Loading
          <span className="Loading"></span>
        </div>
      )}
    </div>
  );
};

/**
 *Component Link Open New Job
 * @param {*} param0 
 * @returns 
 */
const LinkOpenJob = ({ data }) => {
  // console.log(data)
  return (
    <React.Fragment>
      <Link
        to={`/jobs/${data.id}`}
        className="heading show"
        data-portal-title="seniorfinancialanalyst"
        data-portal-location="Cairo, Egypt"
        data-portal-job-type="2"
        data-portal-remote-location="false"
      >
        <div className="info d-flex justify-content-between align-content-center flex-nowrap col-12">
          <div className="jobInfo col-8">
            <div className="job_title">{data.reults.title}</div>

            <div className="job_desc">{data.reults.descriptionT}</div>
          </div>

          <div className="job-location col-2">
            <div className="location-info">
              {data.reults.remote == true ? "remote" : data.locationText}

              <br />
              {data.reults.worktypeT}
            </div>

            <div className="location-icon">
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

/**
 * Component detail One Job 
 * @param {*} param0 
 * @returns 
 */
const OneJob = ({ data }) => {
  // console.log(data)
  return (
    <React.Fragment>
      <li>
        <div className="job-list">
          <LinkOpenJob data={data} />
          {/* <LinkOpenJob /> */}
        </div>
      </li>
    </React.Fragment>
  );
};

// ! ===============>> UL Array <==> jobs <<=======
const ContainerUl = ({ ArrDepar, data, arrDepar }) => {

  const [arrdef, setArrDef] = useState({});
  const [ArrDepar1, setArrDepar1] = useState(ArrDepar);
  let [load, setLoad] = useState(false);
  let [loadNew, setLoadNew] = useState(false);

  // console.log("ArrDepar",ArrDepar)
  console.log("data",data)
  console.log("arrDepar",arrDepar)
  useEffect(() => {
    const timer = setTimeout(() => {
      let Res = GetData;
      
      setArrDef(Res);
      setArrDepar1(arrDepar);
      setLoadNew(true);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {

      setLoad(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  


  // console.log(renData )
  return (
    <React.Fragment>
      <div className="container">
        {data == false ? (
             <div class="no-jobs-found" data-portal-id="no_data" >
             <div class="no-jobs-icon">
              <i class="icon-my-job"></i> 
               <i class="fas fa-briefcase "></i>
             </div>
             <div class="not-found-title">No jobs found</div>
             <p>Oops, you have no jobs that match the filter conditions.</p>
             <p>Try refining your search.</p>
           </div>
        )
      :
      
    <div>

      {arrDepar.length == 0 ? (
          <div>
            {  ArrDepar.map((el, x) => (
              <div>
                {data.filter((e) => e.departmentT == el).length != 0 ? (
                           <ul className="ul">
                           <div className="role-title">
                             <h5>{el}</h5>
                             <div className="role-count">
                               <span className="jobs-count pl-1 pr-2">
                                 {data.filter((e) => e.departmentT == el).length}
                               </span>
                               {/* <span data-portal-job-count="single-job">Open Role</span> */}
                               <span className="multiple-job">Open Roles</span>
                             </div>
                           </div>
                           {
                             //    console.log( data.map( e => e.departmentT === el ? e : ""))
                             data.map((e) =>
                               e.departmentT === el ? <OneJob data={e} /> : ""
                             )
                           }
                         </ul>
                )
              : null
              }
              </div>
     
          ))}
          </div>
      ) 
    :
    (
      <div>

        {
          loadNew == true ? (
            arrDepar.map((el, index) => (
           <div>
           {data.filter((e) => e.departmentT == el).length > 0 ?
           (       // <ul className="ul">
            <ul className="ul">
                <div className="role-title">
                  <h5>{el}</h5>
                  <div className="role-count">
                    <span className="jobs-count pl-1 pr-2">
                      {data.filter((e) => e.departmentT == el).length}
                    </span>
                    {/* <span data-portal-job-count="single-job">Open Role</span> */}
                    <span className="multiple-job">Open Roles</span>
                  </div>
                </div>
                {
                  //    console.log( data.map( e => e.departmentT === el ? e : ""))
                  data.map((e) =>
                    e.departmentT === el ? <OneJob data={e} /> : ""
                  )
                }
              </ul>
           )
           :
            (<div>
              
            </div>)
          }
           </div>
    
    
            ))
     )
          :
          (
            <div className="ring">
            Loading
            <span className="Loading"></span>
          </div>
    
          )
    
        }
      </div>
    )
    }
    </div>
      }




      </div>
    </React.Fragment>
  );
};


/**
 * Component Positions all Select 
 * @param {*} param0 
 * @returns 
 */
const Positions = ({ ArrDepar, work, location, data }) => {

      let [checkTgg, setCheckTgg] = useState(true);
      const [newdata, setNewData] = useState(data);
      const [arrDepar, setArrDepar] = useState(ArrDepar);
      

    /**
     * @description 
     * get data and setTimeout
     */
      useEffect(() => {
        const timer = setTimeout(() => {
          let Res = GetData;

          setNewData(Res);
        
        }, 1000);

        return () => clearTimeout(timer);
      }, []);
   
      

      /**
       * @description function search job onkeyup=searchJob(value)
       */
      const searchJob = (value)=>{
        if(value.length > 0){
          let ResSearch =  [data.filter(el =>
             el.reults.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
             ||
               el.reults.descriptionT.toLocaleLowerCase().includes(value.toLocaleLowerCase())  
            || 
            el.reults.locationText.toLocaleLowerCase().includes(value.toLocaleLowerCase())  
             )]

            
          //   ).filter(e=> e.length >0 )
            console.log(ResSearch)
            if(ResSearch.length == 0){

              setNewData(false)
            }else{
              
                setNewData(...ResSearch)

            }
        }
        else{
          setNewData(data)
        }
      }

      /**@description When pressed, it filters remote functions */
      const cliekClearBtn = (e) => {
        let check = [...document.querySelectorAll(`.selection__clear`)].filter(
          (el) =>
            el.getAttribute("data-select-id") ==
            e.currentTarget.getAttribute("data-select-id")
        );
      
        let getValueAttr = check.map((e) => e.getAttribute("data-select-id"));

        if (getValueAttr == 1) {
          document
            .querySelector(`.sele1 .selection__clear`)
            .classList.remove("show");
          document.querySelector(`.sele1 input`).value = ``;
          document.querySelector(`.sele1 ul`).classList.add("noShow");
          [...document.querySelectorAll(`.sele1  .icon-tick`)].filter((el) =>
            el.classList.remove("show")
          );
          [...document.querySelectorAll(`.sele1  ul li h3`)].filter((el) => [
            el.classList.remove("font-weight-bold"),
            (el.style.fontSize = "0.78vw"),
            (el.style.color = "rgba(0, 0, 0, 0.602)"),
          ]);

          setNewData(data);
          setArrDepar(ArrDepar);
        } else if (getValueAttr == 2) {
          document
            .querySelector(`.sele2 .selection__clear`)
            .classList.remove("show");
          document.querySelector(`.sele2 input`).value = ``;
          document.querySelector(`.sele2 ul`).classList.add("noShow");
          [...document.querySelectorAll(`.sele2  .icon-tick`)].filter((el) =>
            el.classList.remove("show")
          );
          [...document.querySelectorAll(`.sele2  ul li h3`)].filter((el) => [
            el.classList.remove("font-weight-bold"),
            (el.style.fontSize = "0.78vw"),
            (el.style.color = "rgba(0, 0, 0, 0.602)"),
          ]);
          // console.log("mmmm")
          setNewData(data);
          setArrDepar(ArrDepar);
        } else if (getValueAttr == 3) {
          document
            .querySelector(`.sele3 .selection__clear`)
            .classList.remove("show");
          document.querySelector(`.sele3 input`).value = ``;
          document.querySelector(`.sele3 ul`).classList.add("noShow");
          [...document.querySelectorAll(`.sele3  .icon-tick`)].filter((el) =>
            el.classList.remove("show")
          );
          [...document.querySelectorAll(`.sele3  ul li h3`)].filter((el) => [
            el.classList.remove("font-weight-bold"),
            (el.style.fontSize = "0.78vw"),
            (el.style.color = "rgba(0, 0, 0, 0.602)"),
          ]);
        }
      };


      /**
      * Arrow input
      * funtion handler Arrow Inp
      * @param {*}  
      */
      const handlerArrowInp = (clas) => {
        let chekUl = [...document.querySelectorAll(".selInp ul")].filter(
          (e) => e != document.querySelector(`${clas} ul`)
        );
        chekUl.map((e) => e.classList.add("noShow"));
        // let chekUl2 =  [...document.querySelectorAll(".selInp ul")].filter( e => e == document.querySelector(`${clas} ul`) )
        // chekUl2.map(e => e.classList.remove("noShow"))

        if (
          !document.querySelector(`${clas} .arow`).classList.contains("openInput")
        ) {
          document.querySelector(`${clas} .arow`).classList.remove("Amaro");
          document.querySelector(`${clas} .arow`).classList.add("openInput");
        } else {
          document.querySelector(`${clas} .arow`).classList.add("Amaro");
          document.querySelector(`${clas} .arow`).classList.remove("openInput");
        }
      };

      
      /**
      * function toggle BTN
      * @param {*} e 
      * @returns 
      */
      const buttonRomtle = (e) => {
        if (checkTgg) {
          let test = data.map((el) => el.remote == true ? el : null).filter((e) => e !== null);
          setNewData(test)
          document.querySelector(".select3").style.display = "none";
          document.querySelector("#clear-text").style.display = "block";
          [...document.querySelectorAll(".selInp")].map((el) => [
            el.classList.add("col-6"),
            (el.style.paddingLeft = 0),
            (el.querySelector("input").value = ""),
            el.querySelector("ul").classList.add("noShow"),
            el.querySelector(".selection__clear").classList.remove("show"),
          ]);
          [...document.querySelectorAll(".selInp ul li")].map((el) => [
            el.querySelector(" .icon-tick").classList.remove("show"),
            (el.querySelector(" h3").style.fontSize = "0.78vw"),
            el.querySelector(" h3").classList.remove("font-weight-bold"),
            (el.querySelector(" h3").style.color = "rgba(0, 0, 0, 0.602)"),
          ]);
          document.querySelector(".AllSelect").classList.remove("pl-1");
          document.querySelector(".AllSelect").classList.add("pl-0");
        } else {
          setNewData(data);
          [...document.querySelectorAll(".selInp")].map((el) => [
            el.classList.add("col-6"),
            (el.style.paddingLeft = 0),
            el.querySelector("ul").classList.add("noShow"),
            (el.querySelector("input").value = ""),
            el.querySelector(".selection__clear").classList.remove("show"),
          ]);
          [...document.querySelectorAll(".selInp ul li")].map((el) => [
            el.querySelector(" .icon-tick").classList.remove("show"),
            (el.querySelector(" h3").style.fontSize = "0.78vw"),
            el.querySelector(" h3").classList.remove("font-weight-bold"),
            (el.querySelector(" h3").style.color = "rgba(0, 0, 0, 0.602)"),
          ]);
          document.querySelector(".AllSelect").classList.remove("pl-0");
          document.querySelector(".AllSelect").classList.add("pl-1");
          document.querySelector("#clear-text").style.display = "none";
          document.querySelector(".select3").style.display = "block";
          [...document.querySelectorAll(".selInp")].map((e) =>
            e.classList.remove("col-6")
          ); // setCheckTgg = false;
        }

        return setCheckTgg(!checkTgg);
      };


      /**
      * function Clean Button
      * @returns 
      */
      const CleanButton = () => {
        document.querySelector(".AllSelect").classList.remove("pl-0");
        document.querySelector(".AllSelect").classList.add("pl-1");
        document.querySelector("#clear-text").style.display = "none";
        document.querySelector(".select3").style.display = "block";
        document.querySelector(".toggle-btn").checked = false;

        [...document.querySelectorAll(".selInp")].map((el) => [
          el.classList.add("col-6"),
          (el.style.paddingLeft = 0),
          el.querySelector("ul").classList.add("noShow"),
          (el.querySelector("input").value = ""),
          el.querySelector(".selection__clear").classList.remove("show"),
        ]);
        [...document.querySelectorAll(".selInp ul li")].map((el) => [
          el.querySelector(" .icon-tick").classList.remove("show"),
          (el.querySelector(" h3").style.fontSize = "0.78vw"),
          el.querySelector(" h3").classList.remove("font-weight-bold"),
          (el.querySelector(" h3").style.color = "rgba(0, 0, 0, 0.602)"),
        ]);
        document.querySelector(".AllSelect").classList.remove("pl-0");
        document.querySelector(".AllSelect").classList.add("pl-1");
        document.querySelector("#clear-text").style.display = "none";
        document.querySelector(".select3").style.display = "block";
        [...document.querySelectorAll(".selInp")].map((e) =>
          e.classList.remove("col-6")
        );
        setNewData(data);
        return setCheckTgg(!checkTgg);
      };

    
        /**
      * function close  ul out mos
      * @param {*}  
      */
      const closeUl = (e) => {
        e.currentTarget.classList.add("noShow");
      };

      const clickInpCleseUL = (e) => {
        if (!e.currentTarget.querySelector("ul").classList.contains("noShow")) {
          e.currentTarget.querySelector("ul").classList.add("noShow");
        } else {
          // if(!e.currentTarget.querySelector(".selection__clear ").classList.contains("show")){
          
          // }
          let chekUl = [...document.querySelectorAll(".selInp ul")].filter(
            (el) => el == e.currentTarget.querySelector("ul")
          );
          chekUl.map((el) => el.classList.remove("noShow"));
        }
      };

      
      /**
      * function get input value then search in data
      * filter input
      * @param {*}  
      */
      const valueSelect = (e) => {
        if (
          !e.currentTarget.querySelector(".icon-tick").classList.contains("show")
        ) {
          e.currentTarget.querySelector(".icon-tick").classList.add("show");
          e.currentTarget.querySelector("h3").classList.add("font-weight-bold");
          e.currentTarget.querySelector("h3").style.fontSize = "0.9vw";
          e.currentTarget.querySelector("h3").style.color = "rgba(0, 0, 0)";
        } else {
          setNewData(data);
          setArrDepar(ArrDepar);
          //    GetData
          e.currentTarget.querySelector(".icon-tick").classList.remove("show");
          e.currentTarget.querySelector("h3").classList.remove("font-weight-bold");
          e.currentTarget.querySelector("h3").style.fontSize = "0.78vw";
          e.currentTarget.querySelector("h3").style.color = "rgba(0, 0, 0, 0.602)";
          // ()=> setNewData(GetData)
        }

        let valuable1 = document.querySelector(".sele1 #department").value;
        let valuable2 = document.querySelector(".sele2 #working").value;
        let valuable3 = document.querySelector(".sele3 #location").value;
        let checkCliekOut1 = [...document.querySelectorAll(`.sele1 li span`)].map(
          (el) => el.classList.contains("show")
        );
        let checkCliekOut2 = [...document.querySelectorAll(`.sele2 li span`)].map(
          (el) => el.classList.contains("show")
        );
        let checkCliekOut3 = [...document.querySelectorAll(`.sele3 li span`)].map(
          (el) => el.classList.contains("show")
        );
        let clieckNow = e.currentTarget.querySelector("h3").innerHTML;

        
        //  ! === > check on cleck now <==
        let clieckNowInp = e.nativeEvent.composedPath()[2].classList[0];
        
        if (clieckNowInp == "sele1") {
          // console.log(e.nativeEvent.composedPath())
          
          
          
          let check = [...document.querySelectorAll(`.${clieckNowInp} .icon-tick`),].filter((el) => el.classList.contains("show"));
          if(check.length > 0){
            let getValueInpDepat = e.currentTarget.querySelector("h3").innerHTML ;
            let filterDep = data.map((el) => el.departmentT == getValueInpDepat ? el : null).filter((e) => e !== null)
            // let ArrDep = [...new Set(filterDep.map((e) => e.departmentT))];
            // setArrDepar(filterDep);

            setNewData(filterDep);         

          }

        }
        if (clieckNowInp == "sele2") {
          // console.log(e.nativeEvent.composedPath())
          
          
          
          let check = [...document.querySelectorAll(`.${clieckNowInp} .icon-tick`),].filter((el) => el.classList.contains("show"));
          if(check.length > 0){
            let getValueInpDepat = e.currentTarget.querySelector("h3").innerHTML ;
            let filterDep = data.map((el) => el.reults.worktypeT == getValueInpDepat ? el : null).filter((e) => e !== null)
            // let ArrDep = [...new Set(filterDep.map((e) => e.departmentT))];
            // setArrDepar(filterDep);

            setNewData(filterDep);         

          }

        }



        // let trgetClass = e.nativeEvent.composedPath[2].classList[0];
        let check = [...document.querySelectorAll(`.${clieckNowInp} .icon-tick`),].filter((el) => el.classList.contains("show"));
        let inputTrget = document.querySelector(`.${clieckNowInp} input`);
        if (check.length > 0) {
          if (clieckNowInp == "sele1") {
            // let filterDep = data.map(el => el.departmentT  === e.currentTarget.querySelector("h3").innerHTML ? el : null).filter(e => e!== null)
            // setNewData(filterDep)
            // let ArrDep = [...new Set(filterDep.map(e => e.departmentT ))];

            //     setArrDepar(ArrDep)
            let checkLI = e.currentTarget.value;

            if (checkLI == 100) {
              if(!e.currentTarget.querySelector(".icon-tick").classList.contains("show")){
                  console.log("nnn")
                  setNewData(GetData)
                  setArrDepar(ArrDepar)
              }else{
                  setNewData(GetData)
                  setArrDepar(ArrDepar)
              }

              if ( document.querySelector(`.${clieckNowInp} ul li h3`).classList.contains("font-weight-bold")) {
                document
                  .querySelector(`.${clieckNowInp} .selection__clear`)
                  .classList.add("show");

                inputTrget.value = `Department (${
                  [...new Set(GetData.map((e) => e.departmentT))].length
                })`;
                [...document.querySelectorAll(`.${clieckNowInp} ul li `)].map((e) => [
                  e.querySelector(".icon-tick").classList.add("show"),
                  e.querySelector("h3").classList.add("font-weight-bold"),
                  (e.querySelector("h3").style.fontSize = "0.9vw"),
                  (e.querySelector("h3").style.color = "rgba(0, 0, 0)"),
                ]);
              } else {
                if (
                  document
                    .querySelector(`.${clieckNowInp} .selection__clear`)
                    .classList.contains("show")
                ) {
                  document
                    .querySelector(`.${clieckNowInp} .selection__clear`)
                    .classList.remove("show");
                }
                inputTrget.value = ``;
                [...document.querySelectorAll(`.${clieckNowInp} ul li `)].map((e) => [
                  e.querySelector("h3").classList.remove("font-weight-bold"),
                  (e.querySelector("h3").style.fontSize = "0.78vw"),
                  (e.querySelector("h3").style.color = "rgba(0, 0, 0, 0.602"),
                  e.querySelector(".icon-tick").classList.remove("show"),
                ]);
              }
            } else if (checkLI == e.currentTarget.value) {
              document.querySelector(`.${clieckNowInp} .selection__clear`).classList.add("show");
              [...document.querySelectorAll(`.${clieckNowInp} ul li `)].map((e) => [
                e.querySelector(".icon-tick").classList.remove("show"),
                (inputTrget.value = ``),
                e.querySelector("h3").classList.remove("font-weight-bold"),
                (e.querySelector("h3").style.fontSize = "0.78vw"),
                (e.querySelector("h3").style.color = "rgba(0, 0, 0, 0.602"),
              ]);
              e.currentTarget.querySelector(".icon-tick").classList.add("show");
              e.currentTarget.querySelector("h3").classList.add("font-weight-bold");
              e.currentTarget.querySelector("h3").style.fontSize = "0.9vw";
              e.currentTarget.querySelector("h3").style.color = "rgba(0, 0, 0)";
              inputTrget.value = `Department (${1})`;
            }

        

            // document.querySelector(`.${clieckNowInp} .selection__clear`).classList.add("show")
          } else if (clieckNowInpclieckNowInp == "sele2") {
            // console.log( document.querySelector("#department").value.length)
            // console.log( e.currentTarget.querySelector("h3").innerHTML)
            // console.log( e.currentTarget.value)

                if(document.querySelector("#department").value.length != 0){
                    let valueworktype =e.currentTarget.value + 1;
                    let checkInWork = [...document.querySelectorAll(".sele2 li span")]
                    .map(e => e.classList.contains("show"))
                    let checkIneDep = [...document.querySelectorAll(".sele1 li span")]
                    .map(e => e.classList.contains("show"))

            //         console.log(checkIneDep[1])
            //         if(checkInWork[1] == true){

            //             let checkData =newdata.filter(e => e.reults.worktypeV == 1 )
            //             console.log(checkData)
            //             setNewData(checkData)
            //             let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];

            //                 setArrDepar(ArrDep)
            //         }else{
            //             let checkData =newdata.filter(e => e)

            //             setNewData(checkData)
            //             let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];

            //                 setArrDepar(ArrDep)
                    }

            //         // if(valueworktype == 2){
            //         //     let checkData =newdata.filter(e => e.reults.worktypeV == 2)
            //         //     console.log("checkData",checkData.length)
            //         //     // console.log("newdata",newdata)
            //         //     if(checkData.length != 0){

            //         //         setNewData(checkData)
            //         //         let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];

            //         //             setArrDepar(ArrDep)
            //         //     }else{
            //         //         setNewData([])
            //         //         setArrDepar(false)
            //         //     }
            //         //         // setNewData(data)
            //         //         // setArrDepar(ArrDepar)
            //         // }else{
            //         //     let filterDep = data.map(el => el.departmentT  === e.currentTarget.querySelector("h3").innerHTML ? el : null).filter(e => e!== null)
            //         //     setNewData(filterDep)
            //         //     let ArrDep = [...new Set(filterDep.map(e => e.departmentT ))];

            //         //         setArrDepar(ArrDep)

            //         //     // setNewData(data)

            //         // }

            //     }else{
            //         // let valueworktype =e.currentTarget.value + 1;

            //         // .querySelector(".icon-tick").classList.contains("show")
            //         let checkInWork = [...document.querySelectorAll(".sele2 li span")].map(e => e.classList.contains("show"))

            //         if(checkInWork[0] == true){
            //             let checkData =newdata.filter(e => e.reults.worktypeV == 1)
            //             console.log(checkData)

            //             setNewData(checkData)
            //             let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];

            //                 setArrDepar(ArrDep)
            //         }else{
            //             if(checkInWork[1] == true){
            //                 let checkData =newdata.filter(e => e.reults.worktypeV == 2)
            //        setNewData(checkData)
            //        let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];

            //        setArrDepar(ArrDep)

            //    }else{

            //        setNewData(data)
            //         setArrDepar(ArrDepar)
            //    }
            //         }
            //         if(checkInWork[1] == true){
            //                      let checkData =newdata.filter(e => e.reults.worktypeV == 2)
            //             setNewData(checkData)
            //             let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];

            //             setArrDepar(ArrDep)

            //         }else{
            //             if(checkInWork[0] == true){
            //                 let checkData =newdata.filter(e => e.reults.worktypeV == 1)
            //                 console.log(checkData)

            //                 setNewData(checkData)
            //                 let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];

            //                     setArrDepar(ArrDep)
            //             }else{

            //                 setNewData(data)
            //                 setArrDepar(ArrDepar)
            //             }
            //         }
            //         if(checkInWork[0] == true && checkInWork[1] == true){
            //             setNewData(data)
            //             setArrDepar(ArrDepar)

            //         }
            //         // if(valueworktype == "Full-Time"){

            //         // }
            //         //  if(valueworktype == "Part-Time"){
            //         //     let checkData =newdata.filter(e => e.reults.worktypeV == 2)
            //         //     setNewData(checkData)
            //         //     let ArrDep = [...new Set(checkData.map(e => e.departmentT ))];

            //         //     setArrDepar(ArrDep)
            //         // }else{

            //         //     setNewData(data)

            //         // }

            //         // console.log(data.filter(e => e.reults.worktypeT == e.currentTarget.querySelector("h3").innerHTML))
            //     }

            inputTrget.value = `Work Type  (${check.length})`;
            document
              .querySelector(`.${clieckNowInp} .selection__clear`)
              .classList.add("show");
          } else if (clieckNowInp == "sele3") {
            inputTrget.value = `Location (${check.length})`;
            document
              .querySelector(`.${clieckNowInp} .selection__clear`)
              .classList.add("show");
          }

          inputTrget.style.color = "#000";
        } else {
          inputTrget.value = ``;
          document
            .querySelector(`.${clieckNowInp} .selection__clear`)
            .classList.remove("show");
        }
      };

      return (
        <React.Fragment>
          <div className="container">
            <div className="title_job mt-4">
              <h3>Open Positions</h3>
            </div>

            <div className="dis_moible container col-12 d-flex justify-content-start align-content-center p-0 mt-4 mb-3 flex-row flex-lg-row flex-md-column  flex-sm-column">
              <div className="AllSelect  col-md-12  col-lg-9 pl-0 flex-md-row flex-sm-nowrap  flex-lg-nowrap">
                <div
                  onClick={(e) => clickInpCleseUL(e)}
                  className="sele1 select1 selInp mt-md-0  mr-2 px-0 mt-sm-2"
                >
                  <span className="arow Amaro"></span>
                  <span
                    onClick={(e) => cliekClearBtn(e)}
                    className="select1-selection__clear selection__clear"
                    title="Remove all items"
                    data-select-id="1"
                  >
                    ×
                  </span>
                  <input
                    placeholder="Choose Department"
                    onClick={(e) => handlerArrowInp(".select1")}
                    type="text"
                    name=""
                    id="department"
                    className="department pl-3"
                  />

                  <ul onMouseLeave={(e) => closeUl(e)} className="sele1 noShow">
                    <li onClick={(e) => valueSelect(e)} key={100} value={100}>
                      <h3>All</h3>
                      <span class="icon-tick">
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                            fill="#183247"
                          ></path>
                        </svg>
                      </span>
                    </li>
                    {ArrDepar.length > 0
                      ? ArrDepar.map((el, index) => (
                          <li
                            onClick={(e) => valueSelect(e)}
                            key={index}
                            value={index}
                          >
                            <h3>{el}</h3>
                            <span class="icon-tick">
                              <svg
                                width="16"
                                height="12"
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                  fill="#183247"
                                ></path>
                              </svg>
                            </span>
                          </li>
                        ))
                      : null}

 
                  </ul>
                </div>

                <div
                  onClick={(e) => clickInpCleseUL(e)}
                  className="sele2 select2 selInp m-md-0 mt-sm-2 w-auto   mr-2 px-0"
                >
                  <span className="arow Amaro"></span>
                  <span
                    onClick={(e) => cliekClearBtn(e)}
                    className="select2-selection__clear selection__clear"
                    title="Remove all items"
                    data-select-id="2"
                  >
                    ×
                  </span>

                  <input
                    placeholder="Choose Work Type"
                    onClick={() => handlerArrowInp(".select2")}
                    type="text"
                    name=""
                    id="working"
                    className="working pl-3"
                  />

                  <ul onMouseLeave={(e) => closeUl(e)} className="sele2 noShow">
                    {work.length
                      ? work.map((el, index) => (
                          <li
                            onClick={(e) => valueSelect(e)}
                            key={index}
                            value={index}
                          >
                            <h3>{el}</h3>
                            <span class="icon-tick">
                              <svg
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                  fill="#183247"
                                ></path>
                              </svg>
                            </span>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>

                <div
                  onClick={(e) => clickInpCleseUL(e)}
                  className="sele3 select3 selInp m-md-0 mt-sm-2    mr-2 pr-0 pl-md-2 pl-sm-0"
                >
                  <span className="arow Amaro"></span>

                  <span
                    onClick={(e) => cliekClearBtn(e)}
                    className="select3-selection__clear selection__clear"
                    title="Remove all items"
                    data-select-id="3"
                  >
                    ×
                  </span>
                  <input
                    placeholder="Choose Location"
                    onClick={() => handlerArrowInp(".select3")}
                    type="text"
                    name=""
                    id="location"
                    className="location pl-3"
                  />

                  <ul
                    onMouseLeave={(e) => closeUl(e)}
                    className="sele3 noShow"
                    style={{ zIndex: 9 }}
                  >
                    {location.length > 0
                      ? location.map((el, index) => (
                          <li
                            onClick={(e) => valueSelect(e)}
                            key={index}
                            value={index}
                          >
                            <h3>{el}</h3>
                            <span class="icon-tick ">
                              <svg
                                viewBox="0 0 16 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.18005 6.17997L5.18005 9.32997L14.1501 0.869974C14.4801 0.539973 15.0201 0.569974 15.3501 0.899974C15.68011.22997 15.6501 1.76997 15.3201 2.09997L5.72005 11.13C5.39005 11.46 4.85005 11.43 4.52005 11.1L0.950052 7.31997C0.6200526.98997 0.650052 6.44997 0.980052 6.11997C1.34005 5.81997 1.85005 5.81997 2.18005 6.17997Z"
                                  fill="#183247"
                                ></path>
                              </svg>
                            </span>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>

              <div className="toggle-and-clear mt-sm-5 col-xl-3 col-lg-2 col-md-12 col-sm-12 ml-3 justify-content-sm-start justify-content-md-start p-0 mt-lg-0 mt-sm-2">
                <div className="remote-toggle col-xl-5  col-lg-8 col-md-6 col-sm-6 p-0">
                  <span className="mt-md-2 mt-sm-2 mt-lg-1 col-xl-10 col-lg-8 col-md-7 p-0 ">
                    Remote Only
                  </span>

                  <div className="toggle-switch  col-lg-5 p-0 col-md-5">
                    <input name=" [remote]" type="hidden" value="0" />
                    <input
                      onClick={(e) => buttonRomtle(e)}
                      className="toggle-btn"
                      type="checkbox"
                      value="1"
                      name=" [remote]"
                      id="_remote"
                    />
                    <label for="toggle-btn"></label>
                  </div>
                </div>

                <div
                  className="clear-text ml-xl-4 col-xl-3 col-md-3 p-0 ml-1"
                  id="clear-text"
                >
                  <button onClick={() => CleanButton()}>Clean</button>
                </div>
              </div>
            </div>
          </div>

          <div className="container mb-4">
            <div className="input-field">
              <input
                className="search_input"
                type="text"
                id="job-title-search"
                placeholder="Search Job Title"
                onChange={(e)=>searchJob(e.target.value)}
              />
              <i className="fas fa-search icon-search"></i>
              <button className="close-icon" id="close-icon">
                ×
              </button>
            </div>
          </div>
          <ContainerUl arrDepar={arrDepar} ArrDepar={ArrDepar} data={newdata} />
        </React.Fragment>
      );
};


/**
 * Component Header
 * @returns 
 */
const Header = () => {
  return (
    <div className="container-fluid p-0">
      <div className="container">
        <Row className="Header">
          <Col className="justify-content-center text-center" sm="12">
            <div className="title">
              <span class="portal-img">
                <img
                  src="https://1825026.app.netsuite.com/core/media/media.nl?id=4841&c=1825026&h=mTUwUBzxpdLHcstbW_s0dM23DtQ3etdXIePkDu2_Jp-bCqR_"
                  alt="Logo"
                  data-type="logo"
                />
              </span>
              <span>
                <h4 class="brand-text">Azdan - Careers</h4>
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

/**
 * Component Home
 * @returns 
 */
const Home = () => {
  const [data, setData] = useState([]);
  const [ArrDepar, setArrDepar] = useState([]);
  const [work, setWork] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      let Res = GetData; //! ===> varebl in farst script in HTML <===

      setData(Res);
      if (Res.length > 0) {
        let ArrDep = [...new Set(Res.map((e) => e.departmentT))];
        setArrDepar(ArrDep);
        let worktype = [...new Set(Res.map((e) => e.reults.worktypeT))];
        setWork(worktype);
        let location = [
          ...new Set(
            Res.map((e) => e.locationText).filter((e) => e.length !== 0)
          ),
        ];

        setLocation(location);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Header />
      <div className="container-fluid p-0">
        <img
          className="advanced-index-banner w-100"
          src="https://1825026.app.netsuite.com/core/media/media.nl?id=4840&c=1825026&h=yfdd_3wep5hObZ8NcrfeEbtluxteroLelFgAvJpz3KOk9huA&fcts=20221123124939"
        />
      </div>
      <Positions
        ArrDepar={ArrDepar}
        work={work}
        location={location}
        data={data}
      />
      {/* <ContainerUl ArrDepar={ArrDepar} data={data} /> */}
    </div>
  );
};

// ! =============================>>>> fun App <<<<====================
const App = () => {
  return (
    <ReactRouterDOM.HashRouter>
      <div className="container-fluid p-0">
        <Route path="/" exact component={Home} />
        <Route path="/jobs/:id" exact component={PageJob} />
      </div>
    </ReactRouterDOM.HashRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
