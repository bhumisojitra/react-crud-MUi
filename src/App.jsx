import { Route, Routes, useNavigate } from "react-router"
import Home from "./Component/Home/Home.jsx"
import FormDetail from "./Component/FormDetail/FormDetail.jsx"
import View from "./Component/View/View.jsx"
import { useEffect, useState } from "react"
import EditData from "./Component/EditData/EditData.jsx"
import helper from './Component/Helper/Helper.jsx'
import Header from "./Component/Header/Header.jsx"
import MUi from "./Component/MUi/MUi.jsx"

function App() {

  const [input, setInput] = useState({
    id: '',
    fname: '',
    lname: '',
    email: '',
    course: '',
    phone: '',
    gid: '',
    dob: '',
    role: '',
    add: '',
  })

  const [submitData, setSubmitData] = useState(helper());

  const [sortData, setSortData] = useState(helper());

  const [searchData, setSearchData] = useState('')

  console.log("Sun", submitData);
  
  const navigate = useNavigate();

  const handleForm = (e) => {
    console.log(e.target.value);

    const name = e.target.name;
    const value = e.target.value;

    setInput({...input, [name]: value})
  }  

  const handleSubmit = (e) => {

    e.preventDefault();

    input.id = Math.floor(Math.random()* 10000);

    setSubmitData([...submitData, input]);

    setInput({
      id: '',
      fname: '',
      lname: '',
      email: '',
      course: '',
      phone: '',
      gid: '',
      dob: '',
      role: '',
      add: '',
    })

    navigate('/view');
  }

  const handleEdit = (data) => {

    navigate('/edit', { state: data });
  };
  
  const handleSave = (saveRec) =>{

    setSubmitData(saveRec);
    navigate('/view')
  }

  const handleDelete = (id) => {

    const deleteData = submitData.filter((rec) => {
        return rec.id !== id;
    })

    setSubmitData(deleteData);

  }

  //sort
  const handleplus = () => {

    let plus = [...sortData]

    const sortRec = plus.sort((a,b)=>{

      return a.fname.localeCompare(b.fname);
    })

    setSortData(sortRec);
  }

  //filter categori
  const handleRole = (cat) => {
    console.log("categori :", cat);

    if (cat != '') {
      const filterData = helper().filter((rec) => {
        return rec.role.toLowerCase() === cat.toLowerCase();
      })
  
      setSortData(filterData);
    }
    else{
      setSortData(helper());
    }
    
  }

  //Search data

  const handleSearch = (e) => {

    console.log("search :", e.target.value);
    
    setSearchData(e.target.value);

    const filterDataa = helper().filter((rec) => {

      return rec.fname.toLowerCase().includes(searchData.toLowerCase());
    })

    setSortData(filterDataa);
  }

  const handelSearchBtn = () => {

    const filterDataa = helper().filter((rec) => {

      return rec.fname.toLowerCase().includes(searchData.toLowerCase());
    })

    setSortData(filterDataa);
  }

  useEffect(()=> {

    localStorage.setItem('storage', JSON.stringify(submitData));
    setSortData(helper());

  },[submitData]);

  return (
    <>
    <Header />
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/" element={<FormDetail handleSubmit={handleSubmit} handleForm={handleForm} input={input} />}/>
        <Route path="/view" element={<View submitData={sortData} handleEdit={handleEdit} handleDelete={handleDelete} handleplus={handleplus} handleRole={handleRole} searchData={searchData} handleSearch={handleSearch} handelSearchBtn={handelSearchBtn} />}/>
        <Route path="/edit" element={<EditData submitData={submitData} handleSave={handleSave}/>} />
        <Route path="/mui" element={<MUi submitData={sortData} handleEdit={handleEdit} handleDelete={handleDelete} />} />
      </Routes>
    </>
  )
}

export default App
