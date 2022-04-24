import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = Cookies?.get("userInfo") && JSON.parse(Cookies?.get("userInfo"));

  const onSubmitForm = async (values) => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_URL}/api/contact`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(data.mess);
    } catch (err) {}
  };

  return (
    <div>
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col items-center sm:items-start space-y-4 mt-10 font-joseFin"
      >
        <input
          name="name"
          type="text"
          placeholder="Enter Your Name"
          className={`form-input ${errors.name && "ring-2 ring-red-400"}`}
          {...register("name", {
            required: {
              value: true,
              message: "You must enter your name",
            },
          })}
        />
        <span className="text-sm text-orange-500 ml-auto">
          {errors?.name?.message}
        </span>
        <input
          name="email"
          placeholder="Enter Your Email"
          className={`form-input ${errors.email && "ring-2 ring-red-400"}`}
          {...register("email", {
            required: {
              value: true,
              message: "You must enter your email",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
            minLength: {
              value: 2,
              message: "This is not enough to be an email",
            },
            maxLength: {
              value: 120,
              message: "This is too long",
            },
          })}
        />
        <span className="text-sm text-orange-500 ml-auto">
          {errors?.email?.message}
        </span>
        <textarea
          name="message"
          {...register("message", {
            required: {
              value: true,
              message: "You need to enter your message",
            },
            maxLength: {
              value: 1000,
              message: "Your message can't be more than 1000 characters",
            },
          })}
          placeholder="Enter Your Message"
          className={`${
            errors.message && "ring-2 ring-red-400"
          } outline-none p-5 text-sm bg-gray-700 rounded-md w-[20rem] h-[10rem]`}
        ></textarea>
        <span className="text-sm text-orange-500 ml-auto">
          {errors?.message?.message}
        </span>
        <button
          disabled={!user}
          className={`bg-gray-700 font-medium scale-anim py-3 px-5 rounded-full ${
            !user ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          type="submit"
        >
          {user ? "Submit" : "SignIn to Proceed"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
