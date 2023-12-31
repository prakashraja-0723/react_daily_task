import React from "react";
import TagName from "../../../Components/Code/TagName.jsx";
import ComponentTag from "../../../Components/Code/ComponentTag.jsx";
import AttributeName from "../../../Components/Code/AttributeName.jsx";
import AttributeValue from "../../../Components/Code/AttributeValue.jsx";
import ExportFunc from "../../../Components/Code/ExportFunc.jsx";

const FunctionInsideCode_1 = () => {
  return (
    <>
      <pre data-prefix="7">
        &nbsp;&nbsp;&nbsp;&nbsp;<TagName>div</TagName>
      </pre>
      <pre data-prefix="8">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TagName>h1</TagName>Day 01<TagName>/h1</TagName>
      </pre>
      <pre data-prefix="9">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code className={`text-wrap`}>
          <ComponentTag>Info</ComponentTag>{" "}
          <AttributeName>firstName</AttributeName>=
          <AttributeValue>'Prakash Raja'</AttributeValue>&nbsp;
          <AttributeName>symbol</AttributeName> =
          <AttributeValue>{`'¶®@|<@$|-| ®@j@'`}</AttributeValue>&nbsp;
          <AttributeName>age</AttributeName>=<AttributeValue>22</AttributeValue>
          &nbsp;/&gt;
        </code>
      </pre>
      <pre data-prefix="10">
        &nbsp;&nbsp;&nbsp;&nbsp;<TagName>div</TagName>
      </pre>
      <pre data-prefix={11}>){`}`};</pre>
			<pre data-prefix={12}><ExportFunc>Day01</ExportFunc></pre>
    </>
  );
};
export default FunctionInsideCode_1;
