import { useFormik } from "formik"
import { useState } from "react";
import some, { hello, person } from '../dummy/sample'
import { useSelector } from "react-redux";

const HomePage = () => {

  const dat = useSelector((store) => store)
  console.log(dat);



  const [data, setData] = useState([]);



  const formik = useFormik({
    initialValues: {
      todo: '',


    },
    onSubmit: (val, { resetForm }) => {
      setData([...data, val.todo]);
      resetForm();
    }
  });

  console.log(some);


  return (
    <div className="p-5">

      <h1 className="text-2xl">Sample Todo App</h1>

      <form onSubmit={formik.handleSubmit}>

        <div className="space-y-2">
          <label htmlFor="todo">Add Todo Activities</label>
          <br />
          <input
            onChange={formik.handleChange}
            value={formik.values.todo}
            name="todo"
            id="todo"
            type="text"
            className="border border-black outline-none px-2 py-1" />
        </div>




      </form>





    </div>
  )
}
export default HomePage