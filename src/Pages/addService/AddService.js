import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    console.log(data)
    const url = `https://glacial-forest-54030.herokuapp.com/service`;
    fetch(url, {
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
    } )

};

  return (
    <div className="w-50 mx-auto">
      <h2>please add a service</h2>
      <form className="d-flex flex-column gap-3" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="Your Name" {...register("name")} />
        <textarea placeholder="description" {...register("description")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="price" {...register("price", { required: true })} />
        <input placeholder="photo URL" {...register("img", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
