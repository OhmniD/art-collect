import { AmplifyS3Image } from "@aws-amplify/ui-react";
import placeholder from "../../static/assets/thumbnail-placeholder.png";

export default function ArtworkInfo({
  artwork,
  artist,
  medium,
  artworkImages,
}) {
  let image;
  if (artworkImages[artwork.id]) {
    image =
      artworkImages[artwork.id].length > 0 ? (
        <AmplifyS3Image
          style={{ "--height": "450px" }}
          key={artworkImages[artwork.id][0].fullsize.key}
          imgKey={artworkImages[artwork.id][0].fullsize.key.replace(
            "public/",
            ""
          )}
        />
      ) : (
        <img classname="shadow" src={placeholder} alt=""></img>
      );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {artwork.title}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {artist.name}, {artwork.year}
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Medium</dt>
            <dd className="mt-1 text-sm text-gray-900">{medium.medium}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Type</dt>
            <dd className="mt-1 text-sm text-gray-900">{artwork.type}</dd>
          </div>
          <div className="sm:col-span-1 sm:row-span-4">
            {artworkImages[artwork.id] ? image : null}
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Reference Number
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {artwork.referenceNumber}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Signed by artist?
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              {artwork.signed ? "Yes" : "No"}
            </dd>
          </div>

          <div className="sm:col-span-2">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing
              reprehenderit deserunt qui eu.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
