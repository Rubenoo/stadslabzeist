import { Collapse } from "antd";
import React from "react";
import { Project } from "../../common/types";
import ProjectContent from "./ProjectContent";
import { H2P } from "./styles";
import { DownCircleOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const ProjectTable = (props: { ProjectenArray: Array<Project> }) => {
  return (
    <Collapse
      accordion
      expandIconPosition="end"
      bordered={false}
      style={{ borderRadius: "25px 25px 0 0" }}
      expandIcon={({ isActive }) => (
        <DownCircleOutlined
          style={{ fontSize: "35px", color: "#fff", marginRight: "0.5em" }}
          rotate={isActive ? 0 : -90}
        />
      )}
    >
      {props.ProjectenArray.map((project: Project, index) => (
        <Panel
          header={
            <H2P style={{ color: project.titleColor }}>{project.title}</H2P>
          }
          key={index}
          style={{
            backgroundColor: project.color,
            padding: "1em",
            borderRadius: index === 0 ? "25px 25px 0 0" : "0",
          }}
        >
          <ProjectContent project={project} />
        </Panel>
      ))}
    </Collapse>
  );
};

export default ProjectTable;
