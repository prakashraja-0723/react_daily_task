import React from "react";
import TagName from "../../../Components/Code/TagName.jsx";
import ComponentTag from "../../../Components/Code/ComponentTag.jsx";
import AttributeName from "../../../Components/Code/AttributeName.jsx";
import AttributeValue from "../../../Components/Code/AttributeValue.jsx";
import ExportFunc from "../../../Components/Code/ExportFunc.jsx";

const FunctionInsideCode_2 = () => {
  return (
    <>
      <pre data-prefix="5">
        &nbsp;&nbsp;&nbsp;&nbsp;<TagName></TagName>
      </pre>
      <pre data-prefix="6">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TagName>ul</TagName>
      </pre>
      <pre data-prefix="7">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <code className={`text-wrap`}>
          <TagName>li</TagName>Name: {<AttributeValue>props.name</AttributeValue>}
          <TagName>/li</TagName>;
        </code>
      </pre>
      <pre data-prefix="8">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <code className={`text-wrap`}>
          <TagName>li</TagName>symbolName: {<AttributeValue>props.symbol</AttributeValue>}
          <TagName>/li</TagName>;
        </code>
      </pre>
      <pre data-prefix="9">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <code className={`text-wrap`}>
          <TagName>li</TagName>Age: {<AttributeValue>props.age</AttributeValue>}
          <TagName>/li</TagName>;
        </code>
      </pre>
      <pre data-prefix={10}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TagName>/ul</TagName>
      </pre>
      <pre data-prefix="11">
        &nbsp;&nbsp;&nbsp;&nbsp;<TagName>/</TagName>
      </pre>
      <pre data-prefix={12}>){`}`};</pre>
      <pre data-prefix={13}>
        <ExportFunc>Info</ExportFunc>
      </pre>
    </>
  );
};
export default FunctionInsideCode_2;
