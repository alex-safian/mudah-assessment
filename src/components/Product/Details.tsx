import React from "react";
import cx from "classnames";
import { Heart, Mail, MessageSquare, Phone, Share2 } from "react-feather";
import { ReactComponent as Avatar } from "../../assets/img/anonymous-user.svg";
import { ProductAttributeAbstractType } from "../../redux/models/products";

type Props = {
  className?: string;
  attributes: ProductAttributeAbstractType;
};

const Details: React.FC<Props> = ({ className, attributes }: Props) => {
  return (
    <div
      className={cx(
        "md:px-8 pt-5 pb-2 md:pb-5 md:w-325px  md:border border-gray-300",
        className
      )}
    >
      <div className="flex mb-4">
        <div className="flex items-center mr-16 cursor-pointer text-gray-400 hover:text-gray-800">
          <Heart size={20} className="mr-2.5" /> Wishlist
        </div>
        <div className="flex items-center cursor-pointer text-gray-400 hover:text-gray-800">
          <Share2 size={20} className="mr-2.5" /> Share
        </div>
      </div>
      <div className="mb-3">
        <div className="text-xs text-gray-400">Price</div>
        <span className="text-red">{attributes.price}</span>
      </div>
      <div className="mb-3">
        <div className="text-xs text-gray-400">Item condition</div>
        <div className="text-gray-600">{attributes.condition}</div>
      </div>
      <div className="mb-3">
        <div className="text-xs text-gray-400">Item location</div>
        <div className="text-gray-600">{attributes.location}</div>
      </div>
      <div className="mb-4">
        <div className="text-xs text-gray-400 mb-1">Seller info</div>
        <div className="flex items-center">
          <Avatar width={43} className="mr-4" />
          <div>
            <div className="text-gray-600">{attributes.seller_name}</div>
            <div className="text-xs text-gray-400">
              {attributes.seller_type}
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-100 -mx-4 md:-mx-8 mb-4"></div>
      <div className="hidden md:block text-xs text-gray-600 mb-2.5">
        Interested with the ad? Contact the seller
      </div>
      <div className="links fixed left-0 right-0 bottom-0 md:static flex justify-between md:block bg-white shadow-floating md:shadow-none py-3 px-1">
        <a
          className="border border-red px-2 py-2 md:px-4 sm:w-1/4 md:w-auto text-red hover:text-gray-400 hover:border-gray-400 flex items-center rounded-md md:mb-2.5 cursor-pointer text-sm"
          href={`tel:${attributes.phone}`}
        >
          <Phone size={18} className="mr-1 md:mr-4" />
          {attributes.phone}
        </a>
        <a
          className="border border-red px-2 py-2 md:px-4 sm:w-1/4 md:w-auto text-red hover:text-gray-400 hover:border-gray-400 flex items-center rounded-md md:mb-2.5 cursor-pointer text-sm"
          href="mailto:example@example.com"
        >
          <Mail size={18} className="mr-1 md:mr-4" />
          Email
        </a>
        <a
          className="bg-red border border-red px-2 py-2 md:px-4 sm:w-1/4 md:w-auto text-white flex items-center rounded-md text-sm"
          href="mailto:example@example.com"
        >
          <MessageSquare size={18} className="mr-1 md:mr-4" />
          Chat
        </a>
      </div>
    </div>
  );
};

export default Details;
