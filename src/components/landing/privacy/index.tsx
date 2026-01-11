import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';

import iconClose from '@/assets/icons/close.png';

interface PrivacyPolicyModal {
  onClose: () => void;
}

export function PrivacyPolicyModal({ onClose }: PrivacyPolicyModal) {
  return (
    <AnimatePresence>
      <Dim
        key="dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />

      <ModalWrapper
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 50 }}
      >
        <ModalHeader>
          <button type="button" onClick={onClose}>
            <img src={iconClose} alt="닫기" />
          </button>
        </ModalHeader>

        <ModalBody>
          <Title>개인 정보 처리 방침</Title>
          <Content>
            <p className="article-title">제 1 조 (목적)</p>
            <p>
              모두의 시간(이하 ‘서비스’)은 이용자의 개인정보 보호를 소중하게
              생각하며, 대한민국의 개인정보보호법 및 관련 법령을 준수합니다. 본
              방침은 이용자가 제공하는 개인정보가 어떤 용도와 방식으로 이용되고
              있는지 알리기 위해 작성되었습니다.
            </p>

            <p className="article-title">
              제 2 조 (수집하는 개인정보 항목 및 방법)
            </p>

            <ol className="list">
              <li>
                서비스는 이용자의 서비스 이용 과정에서 다음과 같은 정보들을
                자동으로 생성하여 수집할 수 있습니다.
                <ul className="sub-list">
                  <li>
                    수집 항목: IP 주소, 쿠키, 방문 일시, 서비스 이용 기록,
                    브라우저 종류 및 OS
                  </li>
                </ul>
              </li>

              <li>
                본 서비스는 별도의 회원가입 없이 이용할 수 있는 경우, 기기
                식별값 외의 민감한 개인정보를 강제로 수집하지 않습니다.
              </li>
            </ol>

            <p className="article-title">
              제 3 조 (구글 애드센스 쿠키 사용에 관한 고지)
            </p>
            <p>
              본 서비스는 수익 창출 및 광고 제공을 위해 Google AdSense를
              이용하며, 이와 관련하여 다음과 같은 사항을 고지합니다.
            </p>

            <ol className="list">
              <li>
                제3자 제공업체인 Google은 사용자가 본 서비스 또는 다른
                웹사이트를 방문한 기록을 바탕으로 광고를 게재하기 위해 쿠키를
                사용합니다.
              </li>
              <li>
                Google의 광고 쿠키 사용을 통해 Google 및 파트너 업체는 사용자의
                방문 기록에 기반하여 적절한 광고를 사용자에게 제공할 수
                있습니다.
              </li>
              <li>
                사용자는 Google의 광고 설정 페이지를 방문하여 맞춤설정 광고를
                게재하지 않도록 설정할 수 있습니다.
              </li>
            </ol>

            <p className="article-title">부칙</p>
            <p>본 방침은 2026년 1월 11일부터 시행됩니다.</p>
          </Content>
        </ModalBody>
      </ModalWrapper>
    </AnimatePresence>
  );
}

const Dim = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 800;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 30px;
    height: 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 306px;
  height: 440px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  z-index: 801;
  background: #ffffff;
  border-radius: 8px;
  padding: 8px 16px 24px 16px;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const Title = styled.h1`
  ${theme.typography.semibold03};
  color: ${theme.colors.gray07};
  text-align: center;
  margin: 0;
`;

const Content = styled.div`
  width: 100%;
  color: ${theme.colors.gray05};
  ${theme.typography.regular02};

  .article-title {
    ${theme.typography.medium04};
    margin: 24px 0 8px;
  }

  p {
    margin: 8px 0;
    line-height: 1.5;
  }

  .list {
    margin: 8px 0 8px 20px;
    padding: 0;
  }

  .list > li {
    margin: 6px 0;
  }

  ol {
    margin: 0 0 4px;
  }

  .sub-list {
    margin: 6px 0 6px 20px;
    padding: 0;
  }

  .sub-list > li {
    margin: 4px 0;
  }
`;
