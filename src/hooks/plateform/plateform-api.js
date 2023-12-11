import {
  useTrendingPlateformQuestionQuery,
  useAffiliatedSearchQuery,
  useAffiliatedRequestMutation,
  useAllDomainPlateformQuery,
  useLinkedInstituteDomainMutation,
} from "../../services/plateform/plateformApi";

export const useTrendingPlateformQuestion = (id) => {
  const {
    data: trendingPlateformQuestion,
    refetch: trendingPlateformQuestionRefetch,
  } = useTrendingPlateformQuestionQuery(id);
  return { trendingPlateformQuestion, trendingPlateformQuestionRefetch };
};

export const useAffiliatedSearch = (args) => {
  const { data: affiliatedSearch, refetch: affiliatedSearchRefetch } =
    useAffiliatedSearchQuery(args);
  return { affiliatedSearch, affiliatedSearchRefetch };
};

export const useAffiliatedRequest = () => {
  const [affiliatedRequest] = useAffiliatedRequestMutation();
  return [affiliatedRequest];
};
export const useAllDomainPlateform = (args) => {
  const { data: allDomainPlateform, refetch: allDomainPlateformRefetch } =
    useAllDomainPlateformQuery("", {
      skip: args.skip,
    });
  return { allDomainPlateform, allDomainPlateformRefetch };
};

export const useLinkedInstituteDomain = () => {
  const [linkedInstituteDomain] = useLinkedInstituteDomainMutation();
  return [linkedInstituteDomain];
};
