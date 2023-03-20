import React from 'react'
import Link from 'next/link';
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

function ProjectCard({title, desc, projectPic, seeMoreLink} : {title: string, desc: string, projectPic: string, seeMoreLink: string}) {
  return (
    <Card css={{ w: "100%", h: "400px" }} variant="bordered" borderWeight="light">
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={projectPic}
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Project image"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Text color="#d1d1d1" size={12}>
                  {title}
                </Text>
                <Text color="#d1d1d1" size={12}>
                  {desc}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Link target='_blank' href={`${seeMoreLink}`}>
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    See more
                  </Text>
                </Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default ProjectCard