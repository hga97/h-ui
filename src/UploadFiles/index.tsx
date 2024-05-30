import type { GetProp, UploadFile, UploadProps } from 'antd';
import { Button, message, Progress, Upload } from 'antd';
import React, { useState } from 'react';
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const cutToken = 'ghp_nUtnJuaAQKWwGCPS';
const tailToken = 'JITCTqMvh9c8Nc2H5Vmh';
const username = 'hgatest';
const repo = 'files';
const branch = 'main';
const apiUrl = 'https://api.github.com/repos';
const baseUrl = `${apiUrl}/${username}/${repo}/contents`;

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(',')[1]);
    };
    reader.onerror = (error) => reject(error);
  });

const uploader = async ({ content, file }: any) => {
  const d = new Date();
  const suffix = file.name?.split('.').pop() || 'png';
  const path = `${d.getFullYear()}/${d.getMonth()}/${d.getTime()}.${suffix}`;
  const uploadUrl = `${baseUrl}/${path}`;

  const body = {
    branch,
    message: 'upload',
    content,
    path,
  };

  const headers = {
    Authorization: `token ${cutToken}${tailToken}`,
    'Content-Type': 'application/json; charset=utf-8',
  };

  const res = await fetch(uploadUrl, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers,
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return res?.content?.download_url;
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

    if (imgUrl) {
      // onSuccess(imgUrl);
      setFileList((prev) =>
        prev.map((item) =>
          item.uid === file.uid
            ? {
                ...item,
                imgUrl,
              }
            : item,
        ),
      );
    } else {
      // onError(imgUrl);
    }
  };

  const props = {
    multiple: true,
    onChange: handleChange,
    beforeUpload,
    customRequest,
    itemRender: (...parmas: any[]) => {
      const file = parmas[1];
      return (
        <div className="file-item">
          <Progress percent={file.percent} showInfo={false} />
          <div>{file.name}</div>
        </div>
      );
    },
  };

  return (
    <Upload {...props} fileList={fileList}>
      <Button icon={'+'}>Upload</Button>
    </Upload>
  );
};

export default UploadFiles;
