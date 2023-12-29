import api  from "./AxiosClient";

/**
 * Represents a service for retrieving district data.
 */
class DistrictService {
    /**
     * Retrieves the districts from a given province code.
     * @param {string} provinceCode - The code of the province.
     * @returns {Promise} A promise that resolves with the district data.
     */
    getDistrictFromProvice(provinceCode) {
        return api.get("/api/district/getDistricts?province=" + provinceCode);
    }
}

export default new DistrictService