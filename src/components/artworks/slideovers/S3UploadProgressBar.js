const S3UploadProgressBar = ({ uploadProgress }) => {
  return (
    <div className="relative pt-1 my-3">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
            Upload in progress
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-indigo-600">
            {Math.floor((uploadProgress.loaded / uploadProgress.total) * 100)} %
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
        <div
          style={{
            width: `${Math.floor(
              (uploadProgress.loaded / uploadProgress.total) * 100
            )}%`,
          }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
        ></div>
      </div>
    </div>
  );
};

export default S3UploadProgressBar;
