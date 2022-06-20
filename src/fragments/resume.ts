const resume: Resume = [
  {
    role: "Product Lead",
    company: "Interobang",
    companyUrl: "https://interobang.group",
    startDate: "",
    description: "",
    achievements: [""],
    learnings: ""
  }
]

export default resume;

type Resume = Job[]

  interface Job {
    role: string;
    company: string;
    companyUrl?: string;
    startDate: string;
    endDate?: string;
    description: string;
    achievements: string[];
    learnings?: string;
}