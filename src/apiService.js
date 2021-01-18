'use strict';
export default async (name, page) => {
    try {
        const result = await fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=12&key=19822283-ed0faee6ad1fffca99be2e04e`);
        return result.json();
    }
    catch (error){
        return error;
    }
}