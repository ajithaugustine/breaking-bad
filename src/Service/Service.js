import axios from "axios";
const baseUrl = "https://www.breakingbadapi.com/api/";

export const getCharacters = async (count) => {
  try {
    const value = await axios.get(
      `${baseUrl}characters?limit=${count}&offset=0`
    );
    return value.data;
  } catch (error) {
    console.log(error);
  }
};


export const getCharacter = async (id) => {
  try {
    const value = await axios.get(`${baseUrl}characters/${id}`);
    return value.data;
  } catch (error) {
    console.log(error);
  }
};


export const getCharacterquotes = async (id) => {
  try {
    const value = await axios.get(`${baseUrl}quotes/${id}`);
    return value.data;
  } catch (error) {
    console.log(error);
  }
};
