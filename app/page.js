'use client'
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/tickerdata.FinancialData/getIncomeStatement?symbol=IBM` , {    
        method: 'GET',    
        mode: 'no-cors',       
      });
      const data = await response.json();
      setData(data);

    };
    fetchData();
    console.log(data)

  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300">
      <table className="w-full shrink-0 border-separate border-spacing-0 print:table-fixed table-fixed">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gross Profit</td>
                {/* {data.map(td => <td>{td.annualReports.grossProfit}</td>)} */}
              </tr>
              <tr>
                <td>Total Revenue</td>
                <td >test</td>
              </tr>
              <tr>
                <td>costofGoodsAndServicesSold</td>
                <td>test</td>
              </tr>
            </tbody>
          </table>
    </main>
  );
}
