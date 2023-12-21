import React from 'react';
import SingleSkill from './SingleSkill';
import BaseContainer from '../reusable/BaseContainer';

const SkillsGrid = ({ skills }) => {
  return (
    <BaseContainer title="MẠNG LƯỚI PHỦ SÓNG CẢ NƯỚC">
      <div style="text-align: center">
        <p>
          Magic Post là thương hiệu chuyển phát nhanh dựa trên sự phát triển của
          công nghệ và Internet. Chúng tôi sở hữu mạng lưới rộng khắp nhằm hỗ trợ
          các hoạt động giao nhận hàng hóa nhanh chóng không chỉ ở nội thành mà
          còn ở ngoại thành và các vùng xa của các tỉnh thành trong cả nước Việt
          Nam.
        </p>
      </div>
      {skills.map((skill) => (
        <SingleSkill key={skill.id} skill={skill} />
      ))}
    </BaseContainer>
  );
};

export default SkillsGrid;