import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";

const PortfolioCardDetail = (props) => {
  const { buttonLabel, className } = props;

  const { toggle, isOpen, portofolio } = props;

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <b>{portofolio.title}</b>
        </ModalHeader>
        <ModalBody>
          <p>
            {" "}
            <b>Description:</b> {portofolio.description}{" "}
          </p>
          <p>
            {" "}
            <b>Company:</b> {portofolio.company}{" "}
          </p>
          <p>
            {" "}
            <b>Position:</b> {portofolio.position}{" "}
          </p>
          <p>
            {" "}
            <b>Location:</b> {portofolio.location}{" "}
          </p>
          <p>
            {" "}
            <b>Start Date:</b>{" "}
            {moment(portofolio.startDate).format("DD MMMM YYYY")}{" "}
          </p>
          <p>
            {" "}
            <b>End Date:</b>{" "}
            {portofolio.endDate
              ? moment(portofolio.endDate).format("DD MMMM YYYY")
              : "Still working here"}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PortfolioCardDetail;
