import styled from 'styled-components';

export default styled.div`
  background-color: none;
  overflow: visible;

  .carousel.carousel-slider {
    overflow: visible;
  }

  .carousel .slider-wrapper {
    min-height: 800px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .carousel .slider {
    position: static;
  }

  .carousel .slide {
    position: static;
  }

  .slider-item {
    img {
      width: min(80%, 600px);
      max-height: 650px;
    }

    .legend {
      top: calc(100%);
      left: unset;
      margin-left: 0;
      font-family: ${({ theme }) => theme.font.family};
      font-size: clamp(28px, 2.2vw, 36px);
      font-weight: 500;
      background: transparent;
      opacity: 1;
      width: 100%;
      padding: 10px 25px;
    }
  }

  .control-dots {
    position: absolute;
    bottom: calc(3vw);

    .dot {
      opacity: 0.7;
      width: 10px;
      height: 10px;
      margin: 0 12px;

      &:not(.selected) {
        border: 1px solid ${({ theme }) => theme.white900};
        background-color: transparent;
      }
    }
  }

  @media (max-width: 1300px) {
    .carousel .slider-wrapper {
      align-items: center;
    }

    .control-dots {
      bottom: calc(-20px);
    }
  }
`;
