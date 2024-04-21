import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export default function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  //FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  //{filed: "totalPrice", value: 5000, method: "gte"}

  //SORTBY
  const sortField = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortField.split("-");
  const sortBy = { field, direction };

  //PAGINATION
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const {
    isLoading,
    // data: { data: bookings, count } = {},
    data = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filterValue, sortField, currentPage],
    queryFn: () => getAllBookings(filter, sortBy, currentPage),
  });

  //PRE-FETCHING
  // const pageCount = data?.count ? Math.ceil(data?.count / PAGE_SIZE) : 1;
  const pageCount = Math.ceil(data.count / PAGE_SIZE);

  if (currentPage < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterValue, sortField, currentPage + 1],
      queryFn: () => getAllBookings(filter, sortBy, currentPage + 1),
    });

  if (currentPage > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterValue, sortField, currentPage - 1],
      queryFn: () => getAllBookings(filter, sortBy, currentPage - 1),
    });

  // return { isLoading, bookings, error, count };
  return { isLoading, data, error };
}
