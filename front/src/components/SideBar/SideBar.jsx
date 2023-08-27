import { useSelector } from "react-redux";
import { getDataSetList } from "../../redux/dataSetListSlice/selectors";
import {
  AdMarker,
  AddIcon,
  Box,
  CtMarker,
  DownIcon,
  Header,
  LiItem,
  LiItemAdd,
  LinkAdd,
  LinkEl,
  ListIcon,
  Navigation,
  UlList,
} from "./SideBar.styled";
import { getProgressSelector } from "../../redux/frameSlice/selectors";

export default function SideBar() {
  const dataSets = useSelector(getDataSetList);
  const pgogress = useSelector(getProgressSelector);
  // if (!dataSets.length) {
  //   return;
  // }

  return (
    <Header>
      <Navigation>
        <UlList>
          <Box>
            <LiItemAdd>
              <LinkAdd to="add-data-set">
                <AddIcon />
              </LinkAdd>
            </LiItemAdd>
            <LiItemAdd>
              <LinkAdd to="down-data-set">
                <DownIcon />
              </LinkAdd>
            </LiItemAdd>
          </Box>
          {dataSets.map((item) => (
            <LiItem key={item.id}>
              <LinkEl to={`/${item.id}`}>
                {item.name} <ListIcon />
              </LinkEl>
              <AdMarker
                total={item.totalFramesCount}
                processed={item.processedFramesCount}
              />
              <CtMarker />
            </LiItem>
          ))}
        </UlList>
      </Navigation>
    </Header>
  );
}
