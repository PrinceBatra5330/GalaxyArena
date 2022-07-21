import React from "react";
import Header from "../../components/header";
import { NftGallery } from "react-nft-gallery";

const Nft = () => {
  return (
    <>
      <Header />
      <div>
        <NftGallery
          ownerAddress="0xCef5D4FF86F7cF4e080993734e77b2F97Ce7cf17"
          apiUrl="https://api.opensea.io/api/v1/assets?owner=0xCef5D4FF86F7cF4e080993734e77b2F97Ce7cf17"
          isProxyApi={true}
        />
      </div>
    </>
  );
};

export default Nft;
