# Donna - Financial Assistant

## UML Diagrams

- **[Use Case Diagram](https://github.com/akshitgarg4/18103042-Software-Testing-Lab-Assignments/blob/main/Assignment-1/useCase.plantuml)**

      ![Use Case Diagram](https://github.com/akshitgarg4/18103042-Software-Testing-Lab-Assignments/blob/main/Assignment-1/out/useCase/UseCaseDiagram.png)

  ### Code

  ```markdown
  @startuml Use Case Diagram
  skinparam backgroundColor #EEEBDC
  left to right direction
  skinparam packageStyle rectangle
  actor User
  actor "Amazon Price Tracker" as Tracker
  actor ChatBot
  rectangle "Donna - Financial Assistant" {
  usecase "Income Details" as UC1
  usecase "Expenditure Details" as UC2
  usecase "List Requirements" as UC3
  usecase "Alternate Savings" as UC4
  usecase "Add items to Wishlist" as UC5
  usecase "Wishlist Price History" as UC6
  usecase "Price History" as UC7
  usecase "Price Drop Probability" as UC8
  usecase "Login" as UC9
  }
  User --- UC1
  User -- UC2
  User -- UC3
  User -- UC4
  User -- UC5
  User -- UC6
  Tracker -- UC7
  Tracker -- UC8
  UC5 --- ChatBot
  UC6 --- ChatBot
  UC7 --- ChatBot
  UC8 --- ChatBot
  UC1 ..> UC9 : <<include>>
  UC2 ..> UC9 : <<include>>
  UC3 ..> UC9 : <<include>>
  UC4 ..> UC9 : <<include>>
  UC5 ..> UC9 : <<include>>
  UC6 ..> UC9 : <<include>>
  @enduml
  ```

- **[Sequence Diagram](https://github.com/akshitgarg4/18103042-Software-Testing-Lab-Assignments/blob/main/Assignment-1/sequenceDiagram.plantuml)**

  ![Sequence Diagram](https://github.com/akshitgarg4/18103042-Software-Testing-Lab-Assignments/blob/main/Assignment-1/out/sequenceDiagram/SequenceDiagram.png)

  ### Code

  ```markdown
  @startuml Donna_FinancialAssistant_SequenceDiagram
  skinparam style strictuml
  skinparam backgroundColor #EEEBDC
  skinparam sequenceMessageAlign center
  title DONNA - Financial Assistant
  actor User as A
  participant Server as B
  participant ChatBot as C
  participant "Amazon Tracker" as D
  participant "Stock Price Tracker" as E
  autonumber

  A -> B :Request SignUp Form
  activate B#LightGray
  B --> A :SignUp Form
  deactivate B
  A -> B : Fill Details and Submit
  activate B#LightGray
  group#Gold #LightGreen SignUp [Success]
  B -> A: Authentication Accepted
  else #LightPink Failure
  B -> A: Authentication Rejected
  end
  deactivate B
  |||
  A -> B :Request Login Form
  activate B#LightGray
  B --> A :Login Form
  deactivate B
  A -> B : Fill Details and Submit
  activate B#LightGray
  group#Gold #LightGreen Login [Success]
  B -> A: Welcome!!
  else #LightPink Failure
  B -> A: Invalid Username OR Passsword
  end
  deactivate B
  |||
  group#LightGray Details Submission [Request Form]
  A -> B :Request Details Form
  activate B#LightGray
  B --> A :Details Form
  deactivate B
  A -> B :Fill Details and Submit
  activate B#LightGray
  B -> A :Confirmation
  deactivate B
  else Submit via ChatBot
  A -> C :Submit Details
  activate C#LightGray
  C -> B :Send Details
  activate B#LightGray
  B --> C :Confirmation
  deactivate B
  C --> A :Confirmation
  deactivate C
  end
  |||
  A -> C :Submit Wishlist
  activate C#LightGray
  C -> D :Checks Price
  activate D#LightGray
  D --> C :Price
  deactivate D
  C --> A :Estimated Price Suggested
  deactivate C
  |||
  A -> C :Request For Stock Price
  activate C#LightGray
  C -> E :Request For Stock Price Fetch
  activate E #LightGray
  D --> C :Stock Price
  deactivate E
  C --> A :ERequested Stock Price
  deactivate C
  @enduml
  ```
