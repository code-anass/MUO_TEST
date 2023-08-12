/**
 *   Author : Anitha Gorli
 *   Creation Date : 25-MAR-2022
 */
import {isEmpty, isNil, takeLast, take, has, __, trim, head, last, split} from 'ramda';
import {ONE} from './Constants';
import { returnEmpty } from './OperatorConstants';
import { logInfo } from './QLogger';

export const isDataAvailable = mObject => {
  return !isNil(mObject) && !isEmpty(mObject);
};

export const isLoadMoreRequired = mList => {
  if (isDataAvailable(mList)) {
    const {_total_count} = take(ONE, mList);

    return _total_count > mList.length;
  }
  return false;
};

export const fetchSeachAfter = mList => {
  if (isDataAvailable(mList)) {    
    const { _search_after } = takeLast(ONE, mList);
    if (isDataAvailable(_search_after)) {
      return _search_after;
    }
  }
  return [];
};

export const fetchFirstElement = mList => {
  if (isDataAvailable(mList)) {
    return take(ONE, mList);
  }
  return {};
};

export const fetchLastElement = mList => {
  if (isDataAvailable(mList)) {
    return takeLast(ONE, mList);
  }
  return {};
};

export const getValue = (mObject, mKey) => {
  if (isDataAvailable(mObject)) {
    if (mKey in mObject && isDataAvailable(mObject[mKey])) {

      return mObject[mKey]
    }
  }
  return '';
};


export const getValueInLowerCase = (mObject, mKey) => {
  if (isDataAvailable(mObject)) {
    if (mKey in mObject && isDataAvailable(mObject[mKey])) {

      return mObject[mKey].toLowerCase()
    }
  }
  return '';
};
export const getArray = (mObject, mKey) => {
  if (isDataAvailable(mObject)) {
    if (mKey in mObject && isDataAvailable(mObject[mKey])) {
      return mObject[mKey];
    }
  }
  return [];
};
const isObjeckHasKey = (mObject, mKey) => {
  const mObjRef = has(__, mObject);

  return mObjRef(mKey);
};

export const trimContent = mParam => {
  if (isDataAvailable(mParam)) {
    return trim(mParam);
  }
  return ''
};

export const firtstParam = mParam => {
  if (isDataAvailable(mParam)) {
    return head(mParam);
  }
};

export const lastParam = mParam => {
  if (isDataAvailable(mParam)) {
    return last(mParam);
  }
};

export const isContains = (mObject, mValue) => {
  if (isDataAvailable(mObject) && isDataAvailable(mValue)) {
    return mObject.toLowerCase().includes(mValue);
  }
  return false;
};


export const splitAndFetchLastItem = (mSplitParam, mValue) => {
  if (isDataAvailable(mValue)) {
    const splitComponent = split(mSplitParam);

    return last(splitComponent(mValue))
  }
  return returnEmpty;
};

export const getAttachmentType = (mObject, mValue) => {

  if (isDataAvailable(mObject) && isDataAvailable(mValue)) {
    return  last(last(mObject))[mValue];
  }
  return returnEmpty;
};



export const insightSearch = (search,item,t) =>{
  item = item.toLowerCase();
  let arr=[];
    for (let i=0; i<search.length;i++){
    if(search[i].title.toLowerCase().includes(item) || t(search[i].title).toLowerCase().includes(item)){
      arr.push(search[i]);
      break;
    }
    else if(search[i].info.toLowerCase().includes(item) || t(search[i].info).toLowerCase().includes(item)){
      arr.push(search[i]);
      break;
    }
      for(let j=0;j<search[i].theme.length;j++)
      {
        if(search[i].theme[j].content.toLowerCase().includes(item) || t(search[i].theme[j].content).toLowerCase().includes(item)){ 
        arr.push(search[i]);
        break;
        }
      }
      for(let j=0;j<search[i].subtheme.length;j++)
      {
        if(search[i].subtheme[j].content.toLowerCase().includes(item) || t(search[i].subtheme[j].content).toLowerCase().includes(item)){
        arr.push(search[i]);
        break;
        }
      }
}
return arr;
}


export const globalSearchResults = (searchKey,globalData) =>{

   logInfo("Filtering ",searchKey, globalData)
  const filteredData = globalData.filter((item) => {
    const lowerCaseSearchKey = searchKey.toLowerCase();
    const { entityname, domain, displayname,description, tags, sharedBy  } = item;

    return (
      entityname.toLowerCase().includes(lowerCaseSearchKey) ||
      domain.toLowerCase().includes(lowerCaseSearchKey) ||
      description.toLowerCase().includes(lowerCaseSearchKey) ||
      sharedBy.toLowerCase().includes(lowerCaseSearchKey) ||
      displayname.toLowerCase().includes(lowerCaseSearchKey) ||
      tags.some((innerItem) =>
        innerItem.toLowerCase().includes(lowerCaseSearchKey)
      )
    );
  });

  return filteredData;

}



export const filterNews = (year,newsList) =>{

 const filteredData = newsList.filter((item) => {
   const {  posted_on  } = item.data;
    // Filter the list to get data for the selected year 
    const dataYear = new Date(posted_on).getFullYear();
    return String(dataYear) === year;
  });
  
    
 return filteredData;

}