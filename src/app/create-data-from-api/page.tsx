import { Summary, User } from "@/type/type";

const Page = async () => {
  const responseData = await fetch(`https://dummyjson.com/users`, {
    cache: "no-store",
  });
  const userData = await responseData.json();

  const convertToSummary = (userData: { users: User[] }): Summary => {
    const summary: Summary = { department: [] };

    userData.users.forEach((user) => {
      const { company, gender, age, hair, address, firstName, lastName } = user;

      if (company && company.department) {
        let departmentSummary = summary.department.find(
          (dep) => dep[company.department]
        );

        if (!departmentSummary) {
          departmentSummary = {
            [company.department]: {
              male: 0,
              female: 0,
              ageRange: "",
              ageMode: 0,
              hair: {},
              addressUser: {},
              ageFrequencies: {}, // Track frequencies of each age
            },
          };
          summary.department.push(departmentSummary);
        }

        const currentDepartmentSummary = departmentSummary![company.department];

        currentDepartmentSummary.male += gender === "male" ? 1 : 0;
        currentDepartmentSummary.female += gender === "female" ? 1 : 0;

        // Update age information
        if (!currentDepartmentSummary.ageRange) {
          currentDepartmentSummary.ageRange = `${age}-${age}`;
        } else {
          const [minAge, maxAge] = currentDepartmentSummary.ageRange
            .split("-")
            .map(Number);
          currentDepartmentSummary.ageRange = `${Math.min(
            minAge,
            age
          )}-${Math.max(maxAge, age)}`;
        }

        // Update hair color count
        const hairColor = hair.color;
        currentDepartmentSummary.hair[hairColor] =
          (currentDepartmentSummary.hair[hairColor] || 0) + 1;

        // Update address information
        const addressKey = `${firstName}${lastName}`;
        currentDepartmentSummary.addressUser[addressKey] = address.postalCode;

        // Update age frequencies
        currentDepartmentSummary.ageFrequencies[age] =
          (currentDepartmentSummary.ageFrequencies[age] || 0) + 1;

        // Calculate mode
        const ages = Object.keys(currentDepartmentSummary.ageFrequencies).map(
          Number
        );
        const mode = ages.reduce(
          (a, b) =>
            currentDepartmentSummary.ageFrequencies[a] >
            currentDepartmentSummary.ageFrequencies[b]
              ? a
              : b,
          0
        );
        currentDepartmentSummary.ageMode = mode;
      }
    });

    return summary;
  };

  const result = convertToSummary(userData);

  return (
    <main className="max-w-screen-lg mx-auto p-4">
      <div>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </main>
  );
};

export default Page;
