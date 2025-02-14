import type * as contentful from "contentful";

export type GalleryPostSkeleton = {
  contentTypeId: "ayaGallery";
  fields: {
    title: contentful.EntryFieldTypes.Text;
    photo: contentful.EntryFieldTypes.Array<contentful.EntryFieldTypes.AssetLink>;
    uploadAt: contentful.EntryFieldTypes.Date;
  };
};

export type AssetEntry = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
    };
  };
};
