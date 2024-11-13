// icons
import { User, Upload } from "lucide-react";

// components
import Button from "../../components/Button/Button";

const Create = () => {
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
                className=" text-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 text-white rounded-md block border-0 w-full outline-0 ps-10 p-2.5 dark:bg-dark-20  placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
          </div>
          {/* candidate name */}

          <label htmlFor="" className="block mb-2 text-sm">
              Candidate Image
            </label>

          <div className="flex items-center justify-center w-full mb-4">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed rounded-lg cursor-pointer  hover:bg-dark-10 bg-dark-20  border-gray-600 dark:hover:border-gray-500"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload size={20} />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          <Button text="Create" style="w-full" />
        </form>
      </div>
    </div>
  );
};

export default Create;
