import { JobDescriptor } from "@/types";

export const JOBS_OPENINGS: JobDescriptor[] = [
    {
        id: "subgraph-developer",
        active: true,
        title: "Subgraph Developer",
        location: "Remote",
        type: "Contract / Part-Time / Full-Time (Flexible)",
        role: "We are looking for a Subgraph Developer to build and maintain subgraph integrations for various DeFi protocols. You will be responsible for independently researching new protocols, reading smart contracts written in Solidity, designing subgraph schemas, and implementing indexing logic using The Graph. You'll work closely with the product team to ensure alignment with Metrom's campaign requirements and data strategy.",
        responsibilities: [
            "Research DeFi protocols to understand integration requirements",
            "Read and analyze Solidity smart contracts to determine what data should be indexed",
            "Design and implement subgraph schemas and indexing logic using The Graph protocol",
            "Maintain and optimize existing subgraphs as protocols evolve",
            "Collaborate with the product team to align on goals and timelines",
            "Communicate progress clearly and regularly",
        ],
        requirements: [
            "Solid experience with The Graph (subgraph development, GraphQL, schema design)",
            "Strong ability to read and understand Solidity smart contracts",
            "Self-driven with strong research and execution skills",
            "Familiarity with Ethereum and EVM-compatible chains",
            "Clear written and verbal communication",
        ],
        niceToHave: [
            "Minor front-end development experience (React preferred)",
            "Basic understanding of Rust (not required, but a plus)",
        ],
        workingConditions: [
            "Flexible working hours, with the expectation of longer days during peak integration periods",
            "Remote and distributed team — we prefer candidates who are highly self-driven, take initiative, and follow through on tasks independently",
            "Availability for at least 4-5 hours per day in UTC+1 timezone is preferred",
        ],
    },
];
