import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
// import myPdf from "../../../public/docs/MyResume.pdf";

type Props = {};
type Inputs = {
  name: string;
  subject: string;
  email: string;
  message: string;
};
const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:0priyankrai+site@gmail.com?subject=${formData.subject}&?body=Hi, My Name is ${formData.name}. ${formData.message} (${formData.email})`;
    console.log("Fn called");
    console.log(formData);
  };
  return (
    <div className="relative flex flex-col  items-center justify-end h-screen  overflow-hidden w-screen">
      <h3 className="absolute top-1  uppercase tracking-[20px] text-green-900  text-2xl max-sm:text-lg">
        Contact
      </h3>
      <h4 className=" text-center text-2xl text-green-900   ">
        Feel Free to contact me
      </h4>
      <div className="flex flex-col w-screen justify-evenly items-center space-y-5 mt-10 mb-5">
        {/* Phone Number */}
        <div>
          <Link href="tel:+917898099570" className="flex space-x-5  ">
            <PhoneIcon color="green" className="h-7 w-7 animate-pulse" />{" "}
            <span> +917898099570</span>
          </Link>
        </div>
        {/* Phone Number */}
        <div>
          <Link href="tel:+917898099570" className="flex space-x-5 ">
            <MapPinIcon color="green" className="h-7 w-7 animate-pulse" />{" "}
            <span> Flat No 13, Shivaji Nagar, Bhopal</span>
          </Link>
        </div>
        {/* Phone Number */}
        <div>
          <Link
            href="mailto:priyankraiiiii+site@gmail.com"
            className="flex space-x-5 "
          >
            <EnvelopeIcon color="green" className="h-7 w-7 animate-pulse" />{" "}
            <span> priyankraiiiii@gmail.com</span>
          </Link>
        </div>
        <form className="flex flex-col  space-y-2  mx-auto">
          {/* <div className="flex justify-center flex-col space-y-2 md:flex-row md:space-y-0  "> */}
          <div className="flex justify-center flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-3 space-x-0  ">
            <input
              {...register("name")}
              type="text"
              className="contactInput flex"
              placeholder="Name"
            ></input>
            <input
              {...register("email")}
              type="text"
              className="contactInput flex"
              placeholder="Email"
            ></input>
          </div>
          <input
            {...register("subject")}
            type="text"
            className="contactInput flex"
            placeholder="Subject"
          ></input>

          <textarea
            {...register("message")}
            name=""
            id=""
            cols={30}
            rows={5}
            className="contactInput "
            placeholder="Message"
          ></textarea>

          <button
            className="px-10 py-5 rounded-md bg-green-800 text-white"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
