import { useState, useContext } from "react";
// icons
import { User, Upload, Trash } from "lucide-react";

// components
import Button from "../../components/Button/Button";

// utils functions
import { GenerateID, UploadImage } from "../../Utils/Functions";

//  toaster
import toast from "react-hot-toast";

// context
import AccountContext from "../../context/context";

const Create = () => {
  const [form, setForm] = useState({
    name: "",
    image: null,
  });

  const { contract, account } = useContext(AccountContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];
      setForm((prevData) => ({
        ...prevData,
        image: file,
      }));

      // Generate image preview URL
      if (file) {
        setPreview(URL.createObjectURL(file));
      } else {
        setPreview(null);
      }
    } else {
      setForm((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { name, image } = form;
    if (!name || !image) {
      toast.error("Please fill in all the fields");
      return;
    }

    const IpfsHash = await UploadImage(image);

    const candidateID = GenerateID(8);

    try {
      await contract.methods
        .createCandidate(candidateID, name, IpfsHash)
        .send({ from: account });

      toast.success("Candidate added SuccessFully");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    URL.revokeObjectURL(preview);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full md:w-96 lg:w-2/4 max-w-6xl md:bg-dark-50 p-8 rounded-md md:shadow-md md:shadow-inherit">
        <header className="px-2 mb-8 flex items-center justify-center flex-col gap-y-3">
          <h3 className="text-3xl font-semibold text-center ">OpenElect</h3>
          <p className="text-sm text-center text-gray-400">
            Create candidate profile
          </p>
        </header>

        <form action="" className="">
          {/* candidate name */}
          <div className="mb-4">
            <label htmlFor="email-address-icon" className="block mb-2 text-sm">
              Candidate name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <User size={20} />
              </div>
              <input
                id=""
                type="text"
                name="name"
                onChange={handleChange}
                className=" text-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-white rounded-md block border-0 w-full outline-0 ps-10 p-2.5 dark:bg-dark-20  placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
          </div>
          {/* candidate name */}

          <label htmlFor="" className="block mb-2 text-sm">
            Candidate Image
          </label>

          {preview ? (
            // show image preview when user chooses and image
            <>
              <img
                src={preview}
                alt=""
                className="h-32 w-32 object-fill rounded-md"
              />

              <button
                type="button"
                onClick={handleRemoveImage}
                className="mt-2 mb-4 flex items-center gap-x-1  py-1.5 px-4 rounded-sm bg-red-600  hover:bg-red-700 transition-colors duration-75"
              >
                <Trash size={16} />
                Remove
              </button>
            </>
          ) : (
            // show image preview when user chooses and image
            <div className="flex items-center justify-center w-full mb-4">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed rounded-lg cursor-pointer  hover:bg-dark-10 bg-dark-20  border-gray-600 dark:hover:border-gray-500"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload size={20} />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
          )}

          <Button
            text="Create"
            type="submit"
            handleClick={handleSubmit}
            isLoading={isSubmitting}
            style="w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Create;
