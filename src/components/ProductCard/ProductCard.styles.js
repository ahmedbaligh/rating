import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 300px;
  height: 380px;
  padding: 36px 18px;
  background-color: ${({ theme }) => theme.white900};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: center;
  font-weight: 400;

  .img-container {
    width: 100%;
    height: 160px;
    background-image: url(${({ img }) => img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .product-name {
    font-weight: 600;
    color: ${({ theme }) => theme.black700};
  }
  .card-info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .product-price {
      color: ${({ theme }) => theme.gray800};
    }
    a {
      color: ${({ theme }) => theme.gray800};
      padding: 9px 15px;
      border: 1px solid ${({ theme }) => theme.gray100};
      border-radius: 25px;
    }
    .market-name {
      color: ${({ theme }) => theme.gray700};
    }
  }
`;
