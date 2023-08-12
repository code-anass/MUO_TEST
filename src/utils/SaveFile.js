
import Papa from 'papaparse';


  export const saveAndDownloadFile = async (content, filename) => {

    const csvData = await Papa.unparse(content);
    downloadCSVFile(csvData, filename);
  
  };
  

  const downloadCSVFile = (csvContent, fileName) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', fileName);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  