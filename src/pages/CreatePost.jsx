import React from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import slugify from "slugify";

export default function CreatePost() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handlePostSubmit = async (values) => {
    try {
      const body = { ...values, slug: slugify(values.title) };

      const res = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        reset();
        toast.success("Data submitted successfully!");
      } else {
        throw new Error("Failed to submit data");
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="createpost">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit(handlePostSubmit)}>
        <p>Username:</p>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{
            required: "Username is required",
            maxLength: {
              value: 10,
              message: "Username must be at most 10 characters long",
            },
          }}
          render={({ field }) => (
            <div>
              <input type="text" placeholder="Username" {...field} />
              {errors.username && (
                <p className="error-message">{errors.username.message}</p>
              )}
            </div>
          )}
        />
        <p>Title:</p>
        <Controller
          name="title"
          control={control}
          defaultValue=""
          rules={{
            required: "Title is required",
            maxLength: {
              value: 40,
              message: "Title must be at most 40 characters long",
            },
          }}
          render={({ field }) => (
            <div>
              <input type="text" placeholder="Title" {...field} />
              {errors.title && (
                <p className="error-message">{errors.title.message}</p>
              )}
            </div>
          )}
        />
        <p>Description:</p>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          rules={{
            required: "Description is required",
            maxLength: {
              value: 100,
              message: "Description must be at most 100 characters long",
            },
          }}
          render={({ field }) => (
            <div>
              <input type="text" placeholder="Description" {...field} />
              {errors.description && (
                <p className="error-message">{errors.description.message}</p>
              )}
            </div>
          )}
        />
        <p>Image:</p>
        <Controller
          name="image"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <input type="text" placeholder="Image" {...field} />
            </div>
          )}
        />
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
