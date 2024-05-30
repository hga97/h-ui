import type { GetProp, UploadFile, UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import React, { useState } from 'react';
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const accessToken = '864cfc0d91d03546b43e697d523509e4';
const username = 'hgademayun';
const repo = 'files';
const apiUrl = 'https://gitee.com/api/v5/repos';

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const uploader = async ({ content, file }: any) => {
  const d = new Date();
  const suffix = file.name?.split('.').pop() || 'png';
  const path = `${d.getFullYear()}/${d.getMonth()}/${d.getTime()}.${suffix}`;
  const imageUrl = `${apiUrl}/${username}/${repo}/contents/${path}`;

  const formData = new FormData();
  formData.append('content', content);
  formData.append('access_token', accessToken);
  formData.append('message', '上传图片');

  const res = await fetch(imageUrl, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

  debugger;

  return res;
};

const UploadFiles = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }

    // 如果需要阻止列表展现，可以通过返回 Upload.LIST_IGNORE 实现。
    return (isJpgOrPng && isLt2M) || Upload.LIST_IGNORE;
  };

  const customRequest = async (options: any) => {
    const { file, onSuccess, onError } = options;
    const content = await getBase64(file);
    const imgUrl = await uploader({ content, file });
    console.log(imgUrl, '222');
    if (imgUrl) {
      onSuccess(imgUrl);
    } else {
      onError(imgUrl);
    }
  };

  const props = {
    multiple: true,
    onChange: handleChange,
    beforeUpload: beforeUpload,
    customRequest: customRequest,
  };

  return (
    <Upload {...props} fileList={fileList}>
      <Button icon={'+'}>Upload</Button>
    </Upload>
  );
};

export default UploadFiles;
