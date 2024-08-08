import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("localStorage apiKey", () => {
  //GET API KEY-------------------------
  describe("getApiKey", () => {
    it("obtiene la API KEY", () => {
      const key = "EstaEsLaClave";
      localStorage.setItem('APIKEY', key);
      const get = getApiKey();
      expect(get).toEqual(key);
    })
  })

  //SET API KEY-------------------------
  describe("setApiKey", () => {
    it("guarda la API KEY", () => {
      const key = "EstaEsLaClave";
      setApiKey(key);
      const storage = localStorage.getItem('APIKEY');
      expect(storage).toEqual(key);
    })
  })
})