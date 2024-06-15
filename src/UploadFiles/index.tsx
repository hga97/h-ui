import { DeleteOutlined, EyeOutlined, UploadOutlined } from '@ant-design/icons';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { Button, Image, message, Modal, Upload } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const cutToken = 'ghp_nUtnJuaAQKWwGCPS';
const tailToken = 'JITCTqMvh9c8Nc2H5Vmh';
const username = 'hgatest';
const repo = 'files';
const branch = 'main';
const apiUrl = 'https://api.github.com/repos';
const baseUrl = `${apiUrl}/${username}/${repo}/contents`;
const pathname = 'static/images';

const headers = {
  Authorization: `token ${cutToken}${tailToken}`,
  'Content-Type': 'application/json; charset=utf-8',
};

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

const getFileList = async () => {
  const fileListUrl = `${baseUrl}/${pathname}`;

  const res: any = await axios.get(fileListUrl, { headers }).catch((err) => console.log(err));

  return Array.isArray(res?.data) ? res.data : [];
};

const fileUpload = async ({ content, file, onUploadProgress }: any) => {
  const d = new Date();
  const suffix = file.name?.split('.').pop() || 'png';
  const path = `${pathname}/${d.getTime()}.${suffix}`;
  const uploadUrl = `${baseUrl}/${path}`;

  const body = {
    branch,
    message: 'upload',
    content,
    path,
  };

  const res: any = await axios
    .put(uploadUrl, body, { headers, onUploadProgress })
    .catch((err) => console.log(err));

  return res?.data?.content || '';
};

const fileDelete = async ({ name, sha }: any) => {
  const path = `${pathname}/${name}`;
  const deleteUrl = `${baseUrl}/${path}`;

  const body = {
    branch,
    message: 'delete',
    path,
    sha,
  };

  const res: any = await axios
    .delete(deleteUrl, { headers, data: { ...body } })
    .catch((err) => console.log(err));

  return res?.data || '';
};

const UploadFiles = () => {
  const [uploadList, setUploadList] = useState<UploadFile[]>([]);
  const [fileList, setFileList] = useState<any[]>([]);

  useEffect(() => {
    getFileList().then((res) => setFileList(res)); // 初始化
  }, []);

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setUploadList(newFileList);
  };

  const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
      return Upload.LIST_IGNORE;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      return Upload.LIST_IGNORE;
    }

    // 如果需要阻止列表展现，可以通过返回 Upload.LIST_IGNORE 实现。
    return isJpgOrPng && isLt2M;
  };

  const customRequest = async (options: any) => {
    const { file } = options;
    const content = await getBase64(file);

    const onUploadProgress = (progressEvent: any) => {
      const percentCompleted = (progressEvent.loaded / progressEvent.total) * 100;
      setUploadList((prev) => {
        return prev.map((item) => {
          if (item.uid === file.uid) {
            return { ...item, percent: percentCompleted };
          }
          return item;
        });
      });
    };

    const imgContent = await fileUpload({ content, file, onUploadProgress });

    if (imgContent) {
      setFileList((prev) => [...prev, imgContent]);
      setUploadList((prev) => {
        return prev.map((item) => {
          if (item.uid === file.uid) {
            return { ...item, percent: 100 };
          }
          return item;
        });
      });
    } else {
      setUploadList((prev) => {
        return prev.map((item) => {
          if (item.uid === file.uid) {
            return { ...item, status: 'error' };
          }
          return item;
        });
      });
    }
  };

  const props: any = {
    multiple: true,
    listType: 'picture-card',
    fileList,
    onChange: handleChange,
    beforeUpload,
    customRequest,
  };

  return (
    <div className="upload-files">
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
      <div className="file-list">
        {fileList.map((file) => (
          <Image
            key={file.name}
            width={200}
            src={file.download_url}
            preview={{
              mask: (
                <div>
                  <EyeOutlined style={{ margin: '0 10px', fontSize: 18 }} />
                  <DeleteOutlined
                    style={{ fontSize: 18 }}
                    onClick={(e) => {
                      e.stopPropagation();

                      Modal.confirm({
                        centered: true,
                        icon: null,
                        content: '确认删除',
                        okText: '确定',
                        cancelText: '取消',
                        onOk: async () => {
                          const res = await fileDelete(file);
                          if (res) {
                            setFileList((prev) => prev.filter((item) => item.name !== file.name));
                          }
                        },
                      });
                    }}
                  />
                </div>
              ),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UploadFiles;
