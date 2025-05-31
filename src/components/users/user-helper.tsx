/* eslint-disable @typescript-eslint/no-explicit-any */
// format the user data

export const formatUsersData = (users: any) => {
  const mainData = [...users];

  if (!mainData || mainData.length === 0) return [];

  const formattedData = mainData.map((user: any) => {
    return {
      id: user?.id,
      name: user?.fullName,
      email: user?.email,
      phone: user?.phone,
      role: user?.role,
      isVerified: user?.isVerified,
      createdAt: user?.createdAt,
      updatedAt: user?.updatedAt,
    };
  });

  return formattedData;
};
