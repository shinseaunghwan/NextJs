"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ExchangeRate = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('KRW');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [historicalRates, setHistoricalRates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/v4/latest/${baseCurrency}`);
        setRates(response.data.rates);
        setExchangeRate(response.data.rates[targetCurrency]);
      } catch (error) {
        console.error('환율 데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchData();
  }, [baseCurrency, targetCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount(amount * exchangeRate);
    }
  }, [amount, exchangeRate]);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const response = await axios.get(`/api/v4/history/${baseCurrency}`);
        const historicalData = response.data.rates;
        console.log(historicalData); // 데이터 확인을 위해 콘솔에 출력
        const ratesArray = Object.keys(historicalData)
          .filter(date => new Date(date) >= new Date(new Date().setMonth(new Date().getMonth() - 3)))
          .map(date => ({
            date,
            rate: historicalData[date][targetCurrency]
          }));
        setHistoricalRates(ratesArray);
      } catch (error) {
        console.error('과거 환율 데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchHistoricalData();
  }, [baseCurrency, targetCurrency]);

  const chartData = {
    labels: historicalRates.map(rate => rate.date),
    datasets: [
      {
        label: `${baseCurrency} to ${targetCurrency} Exchange Rate`,
        data: historicalRates.map(rate => rate.rate),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className='exchangeRate'>
      <h1 style={{textAlign:'center', marginBottom:"1rem"}}>환율 계산기</h1>
      <div>
        <label>
          <span>기준 통화: <p>{baseCurrency} 1</p></span> 
          <select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          <span>대상 통화: <p>{targetCurrency} {exchangeRate}</p></span>
          <select value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
            {Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          <span>금액:</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <div>
        <h2>
          {amount} {baseCurrency} = {convertedAmount ? convertedAmount.toFixed(2) : '...'} {targetCurrency}
        </h2>
      </div>
      <div>
        <h2>환율 변동 차트</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default ExchangeRate;