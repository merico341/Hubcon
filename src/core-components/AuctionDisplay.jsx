import React from "react";
import Display from "../components/Display";
import Text from "../components/Text";
import GenericDisplay from "./GenericDisplay";

export default function AuctionDisplay() {
  return (
    <div className="flex flex-col gap-10 mt-10">
        <div className="flex items-center justify-center ">
            <Text boldness={"bold"} className={"text-[36px]"}>
                LEILÕES ATIVOS
                <span class="block h-0.5 bg-tag-yellow"></span>
            </Text>
        </div>

        <GenericDisplay></GenericDisplay>
    </div>
  );
}
