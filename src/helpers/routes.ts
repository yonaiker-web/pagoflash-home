export const isSameRoute = (route1: string, route2: string) => {
  const root1 = route1.split("/")[1];
  const root2 = route2.split("/")[1];

  console.log(route1, route2, root1, root2);

  return root1 === root2;
};
