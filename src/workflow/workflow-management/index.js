// /**
// =========================================================
// * BalAsha - Nurture - v4.0.2
// =========================================================

// * Product Page: https://balasha-nurture.web.app/product/soft-ui-dashboard-react
// * Copyright 2024 BalAsha - Nurture (https://balasha-nurture.web.app)

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

//import { useState } from "react";

// @asseinfo/react-kanban components
import Board from "@asseinfo/react-kanban";
import React, { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
// html-react-parser components
import parse from "html-react-parser";
// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import Icon from "@mui/material/Icon";

// BalAsha - Nurture components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftSelect from "components/SoftSelect";

// BalAsha - Nurture example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Kanban application components
import Header from "workflow/workflow-management/components/Header";

// Data
import boards from "workflow/workflow-management/data";

function WorkFlow() {
  const [newCardForm, setNewCardForm] = useState(false);
  const [formValue, setFormValue] = useState(null);
  const [workFlowName, setWorkFlowName] = useState("");
  const [workflowDescription, setWorkFlowDescription] = useState("");

  const openNewCardForm = (event, id) => setNewCardForm(id);
  const closeNewCardForm = () => setNewCardForm(false);
  const handeSetFormValue = (event) => {
    setFormValue(event.value);
    console.log(event);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox
          position="relative"
          my={4}
          sx={({ palette: { light }, functions: { pxToRem }, borders: { borderRadius } }) => ({
            "& .react-kanban-column": {
              backgroundColor: light.main,
              width: pxToRem(450),
              margin: `0 ${pxToRem(10)}`,
              padding: pxToRem(20),
              borderRadius: borderRadius.lg,
            },
          })}
        >
          <Board
            initialBoard={boards}
            allowAddCard
            allowAddColumn
            renderColumnHeader={({ id, title }, { addCard }) => (
              <>
                <SoftBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <SoftTypography variant="h6">{title}</SoftTypography>
                  <SoftButton size="small" onClick={(event) => openNewCardForm(event, id)}>
                    <Icon sx={{ fontWeight: "bold", color: ({ palette: { dark } }) => dark.main }}>
                      add
                    </Icon>
                  </SoftButton>
                  <SoftButton size="small" variant="gradient" color="dark">
                    create
                  </SoftButton>
                </SoftBox>

                <SoftBox
                  display="flex"
                  flexDirection="column"
                  justifyContent="flex-end"
                  height="100%"
                  component="form"
                  role="form"
                >
                  <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Workflow Name
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput value={workFlowName} placeholder="Enter Name" />

                  <SoftBox mb={1} mt={2.5} ml={0.5} lineHeight={0} display="inline-block">
                    <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Workflow Description
                    </SoftTypography>
                  </SoftBox>
                  <SoftInput
                    value={workflowDescription}
                    multiline
                    inputProps={{ rows: 2 }}
                    placeholder="Enter Description"
                  />
                </SoftBox>
                <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                  <SoftTypography component="label" variant="caption" fontWeight="bold">
                    Steps
                  </SoftTypography>
                </SoftBox>

                {newCardForm === id ? (
                  <SoftBox my={2.5}>
                    {/* <SoftInput
                      value={formValue}
                      inputProps={{ rows: 2 }}
                      onChange={handeSetFormValue}
                      multiline
                    /> */}

                    <SoftSelect
                      placeholder="Select Steps"
                      options={boards.steps}
                      onChange={handeSetFormValue}
                      variant="gradient"
                    />

                    <SoftBox display="flex" mt={2}>
                      <SoftButton
                        variant="gradient"
                        color="success"
                        size="small"
                        onClick={() => {
                          addCard({ id: uuidv4(), template: formValue });
                          setFormValue("");
                        }}
                      >
                        add
                      </SoftButton>
                      <SoftBox ml={1}>
                        <SoftButton
                          variant="gradient"
                          color="light"
                          size="small"
                          onClick={closeNewCardForm}
                        >
                          cancel
                        </SoftButton>
                      </SoftBox>
                    </SoftBox>
                  </SoftBox>
                ) : null}
              </>
            )}
            renderCard={({ id, template }, { dragging }) => (
              <>
                <SoftBox
                  key={id}
                  dragging={dragging.toString() || undefined}
                  display="block"
                  width="calc(450px - 40px)"
                  bgColor="white"
                  color="text"
                  borderRadius="md"
                  mt={2.5}
                  py={1.875}
                  px={1.875}
                  lineHeight={1.5}
                  sx={{
                    fontSize: ({ typography: { size } }) => size.md,
                  }}
                >
                  {typeof template === "string" ? parse(template) : template}
                </SoftBox>
              </>
            )}
            onCardNew={() => null}
          />
        </SoftBox>
      </SoftBox>

      <SoftBox>
        <SoftBox
          position="relative"
          my={4}
          sx={({ palette: { light }, functions: { pxToRem }, borders: { borderRadius } }) => ({
            "& .react-kanban-column": {
              backgroundColor: light.main,
              width: pxToRem(450),
              margin: `0 ${pxToRem(10)}`,
              padding: pxToRem(20),
              borderRadius: borderRadius.lg,
            },
          })}
        >
          Hiiiii
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}
// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Card,
//   CardContent,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Box,
// } from "@mui/material";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const Test = () => {
//   const [steps, setSteps] = useState([]); // Stores steps
//   const [stepName, setStepName] = useState("");
//   const [stepDescription, setStepDescription] = useState("");

//   const [workflowName, setWorkflowName] = useState(""); // For workflow form
//   const [workflowDescription, setWorkflowDescription] = useState("");
//   const [selectedStep, setSelectedStep] = useState(""); // For single step selection
//   const [reorderedSteps, setReorderedSteps] = useState([]); // For reordering selected steps
//   const [parallel, setParallel] = useState(false); // Parallel or sequential workflow

//   const [workflows, setWorkflows] = useState([]); // List of created workflows

//   // Add new step
//   const addStep = () => {
//     setSteps([...steps, { name: stepName, description: stepDescription }]);
//     setStepName("");
//     setStepDescription("");
//   };

//   // Handle drag end event to reorder selected steps for workflow
//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const reordered = Array.from(reorderedSteps);
//     const [movedStep] = reordered.splice(result.source.index, 1);
//     reordered.splice(result.destination.index, 0, movedStep);

//     setReorderedSteps(reordered);
//   };

//   // Add selected step to the list of reordered steps for the workflow
//   const addSelectedStepToWorkflow = () => {
//     if (selectedStep !== "") {
//       const step = steps[selectedStep]; // Find step by index
//       setReorderedSteps([...reorderedSteps, step]);
//       setSelectedStep(""); // Reset selected step
//     }
//   };

//   // Create Workflow
//   const createWorkflow = () => {
//     const newWorkflow = {
//       name: workflowName,
//       description: workflowDescription,
//       steps: reorderedSteps,
//       parallel: parallel ? "Parallel" : "Sequential",
//     };

//     setWorkflows([...workflows, newWorkflow]);
//     setWorkflowName("");
//     setWorkflowDescription("");
//     setSelectedStep("");
//     setReorderedSteps([]);
//     setParallel(false);
//   };

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <SoftBox display="flex" justifyContent="flex-end" m={2}>
//         <Header />
//       </SoftBox>

//       <SoftBox>
//         {/* Step creation form */}
//         <Typography variant="h5">Create Step</Typography>
//         <TextField
//           label="Step Name"
//           value={stepName}
//           onChange={(e) => setStepName(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Step Description"
//           value={stepDescription}
//           onChange={(e) => setStepDescription(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <Button variant="contained" onClick={addStep} sx={{ marginBottom: "20px" }}>
//           Add Step
//         </Button>

//         {/* List of steps as cards */}
//         <Typography variant="h5">Steps</Typography>
//         {steps.map((step, index) => (
//           <Card key={index} sx={{ margin: "10px 0" }}>
//             <CardContent>
//               <Typography variant="h6">{step.name}</Typography>
//               <Typography variant="body2">{step.description}</Typography>
//             </CardContent>
//           </Card>
//         ))}

//         {/* Workflow creation form */}
//         <Typography variant="h5" sx={{ marginTop: "30px" }}>
//           Create Workflow
//         </Typography>
//         <TextField
//           label="Workflow Name"
//           value={workflowName}
//           onChange={(e) => setWorkflowName(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Workflow Description"
//           value={workflowDescription}
//           onChange={(e) => setWorkflowDescription(e.target.value)}
//           fullWidth
//           margin="normal"
//         />

//         {/* Dropdown to select steps for workflow */}
//         <FormControl fullWidth margin="normal">
//           <InputLabel>Select Step</InputLabel>
//           <Select value={selectedStep} onChange={(e) => setSelectedStep(e.target.value)}>
//             {steps.map((step, index) => (
//               <MenuItem key={index} value={index}>
//                 {" "}
//                 {/* Use index as value */}
//                 {step.name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <Button
//           variant="contained"
//           onClick={addSelectedStepToWorkflow}
//           sx={{ marginBottom: "20px" }}
//         >
//           Add Step to Workflow
//         </Button>

//         {/* Drag-and-drop reordering of selected steps */}
//         {reorderedSteps.length > 0 && (
//           <>
//             <Typography variant="h6" sx={{ marginTop: "20px" }}>
//               Reorder Selected Steps
//             </Typography>
//             <DragDropContext onDragEnd={handleDragEnd}>
//               <Droppable droppableId="workflowSteps">
//                 {(provided) => (
//                   <div {...provided.droppableProps} ref={provided.innerRef}>
//                     {reorderedSteps.map((step, index) => (
//                       <Draggable key={index} draggableId={index.toString()} index={index}>
//                         {(provided) => (
//                           <Card
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             sx={{ margin: "10px 0", cursor: "grab" }}
//                           >
//                             <CardContent>
//                               <Typography variant="h6">{step.name}</Typography>
//                               <Typography variant="body2">{step.description}</Typography>
//                             </CardContent>
//                           </Card>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </div>
//                 )}
//               </Droppable>
//             </DragDropContext>
//           </>
//         )}

//         {/* Workflow parallel or sequential option */}
//         <FormControl margin="normal">
//           <InputLabel>Parallel Workflow?</InputLabel>
//           <Select value={parallel} onChange={(e) => setParallel(e.target.value === "true")}>
//             <MenuItem value="false">Sequential</MenuItem>
//             <MenuItem value="true">Parallel</MenuItem>
//           </Select>
//         </FormControl>

//         <Button variant="contained" onClick={createWorkflow} sx={{ marginTop: "20px" }}>
//           Create Workflow
//         </Button>

//         {/* Display the created workflows */}
//         <Typography variant="h5" sx={{ marginTop: "40px" }}>
//           Created Workflows
//         </Typography>
//         {workflows.map((workflow, index) => (
//           <Card key={index} sx={{ margin: "10px 0" }}>
//             <CardContent>
//               <Typography variant="h6">{workflow.name}</Typography>
//               <Typography variant="body2">{workflow.description}</Typography>
//               <Typography variant="body2">
//                 <strong>Steps:</strong> {workflow.steps.map((step) => step.name).join(" → ")}
//               </Typography>
//               <Typography variant="body2">
//                 <strong>Type:</strong> {workflow.parallel}
//               </Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </SoftBox>

//       <Footer />
//     </DashboardLayout>
//   );
// };

export default WorkFlow;
